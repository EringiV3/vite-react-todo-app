import { Box, Button, Flex, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMutation } from 'urql';
import { addTodoMutation } from '../graphql/mutation/addTodo';
import {
  AddTodoMutation,
  AddTodoMutationVariables,
} from '../types/generated/graphql';

const TodoCreator: React.FC = () => {
  const toast = useToast();
  const [_, addTodo] = useMutation<AddTodoMutation, AddTodoMutationVariables>(
    addTodoMutation
  );
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClickAdd = async () => {
    if (value === '') return;
    try {
      await addTodo({ addTodoInput: { title: value } });
      setValue('');
    } catch (error) {
      toast({
        title: 'エラーが発生しました',
        description: 'Todoの追加に失敗しました',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex>
      <Box flex="1">
        <Input
          placeholder="新しいTodoを追加する"
          value={value}
          onChange={handleChange}
        />
      </Box>
      <Button onClick={handleClickAdd} disabled={value === ''}>
        Add
      </Button>
    </Flex>
  );
};

export default TodoCreator;
