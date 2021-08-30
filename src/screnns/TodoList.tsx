import {
  Box,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'urql';
import EditableTodo from '../components/EditableTodo';
import LogoutButton from '../components/LogoutButton';
import TodoCreator from '../components/TodoCreator.tsx';
import { getTodosQuery } from '../graphql/query/getTodos';
import { getUserQuery } from '../graphql/query/getUser';
import {
  GetTodosQuery,
  GetTodosQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
  Todo,
} from '../types/generated/graphql';

const TodoListScreen: React.FC = () => {
  const [getTodosQueryResult] = useQuery<GetTodosQuery, GetTodosQueryVariables>(
    {
      query: getTodosQuery,
    }
  );
  const [getUserQueryResult] = useQuery<GetUserQuery, GetUserQueryVariables>({
    query: getUserQuery,
  });
  const doneTodos =
    getTodosQueryResult.data?.getTodos.filter(
      (todo) => todo?.status === 'done'
    ) ?? [];
  const todos =
    getTodosQueryResult.data?.getTodos.filter(
      (todo) => todo?.status === 'pending'
    ) ?? [];

  const sortCallback = (a: Todo, b: Todo) => a.id - b.id;

  return (
    <Box position="relative">
      {getUserQueryResult.data && (
        <Box position="absolute" top="10px" left="10px">
          <Heading>{getUserQueryResult.data.getUser?.name} のTodos</Heading>
        </Box>
      )}
      <Box position="absolute" top="10px" right="10px">
        <LogoutButton />
      </Box>
      <Container paddingTop="80px">
        <Tabs variant="enclosed">
          <TabList>
            <Tab>未完了のTodo</Tab>
            <Tab>完了したTodo</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TodoCreator />
              <Box paddingTop="10px">
                {todos.sort(sortCallback).map((todo) => (
                  <Box key={todo.id} marginTop="15px">
                    <EditableTodo todo={todo} type="unComplete" />
                  </Box>
                ))}
              </Box>
            </TabPanel>
            <TabPanel>
              {doneTodos.length === 0 ? (
                <Box>完了したTodoはありません</Box>
              ) : (
                doneTodos.sort(sortCallback).map((todo) => (
                  <Box key={todo.id} marginTop="15px">
                    <EditableTodo todo={todo} type="complete" />
                  </Box>
                ))
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default TodoListScreen;
