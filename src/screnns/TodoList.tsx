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
              <Box>
                {todos.map((todo) => (
                  <EditableTodo key={todo.id} todo={todo} />
                ))}
              </Box>
            </TabPanel>
            <TabPanel>
              {doneTodos.length === 0 ? (
                <Box>完了したTodoはありません</Box>
              ) : (
                doneTodos.map((todo) => <div key={todo?.id}>{todo?.title}</div>)
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default TodoListScreen;
