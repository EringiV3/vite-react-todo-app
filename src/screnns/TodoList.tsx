import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import LogoutButton from '../components/LogoutButton';
import TodoCreator from '../components/TodoCreator.tsx';

const TodoListScreen: React.FC = () => {
  return (
    <Box position="relative">
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
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default TodoListScreen;
