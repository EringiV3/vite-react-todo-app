import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMutation } from 'urql';
import { deleteTodoMutation } from '../graphql/mutation/deleteTodo';
import { updateTodoMutation } from '../graphql/mutation/updateTodo';
import {
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  Todo,
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
} from '../types/generated/graphql';

type Props = {
  todo: Todo;
  type: 'complete' | 'unComplete';
};
const EditableTodo: React.FC<Props> = ({ todo, type }) => {
  const toast = useToast();

  const [, updateTodo] = useMutation<
    UpdateTodoMutation,
    UpdateTodoMutationVariables
  >(updateTodoMutation);

  const [, deleteTodo] = useMutation<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >(deleteTodoMutation);

  const [todoTitle, setTodoTitle] = useState(todo.title);

  const handleSubmit = async () => {
    try {
      await updateTodo({
        updateTodoId: todo.id,
        updateTodoInput: { title: todoTitle, status: todo.status },
      });
    } catch (error) {
      toast({
        title: 'エラーが発生しました',
        description: 'Todoの更新に失敗しました',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleChange = (value: string) => {
    setTodoTitle(value);
  };

  const handleCheck = async () => {
    try {
      await updateTodo({
        updateTodoId: todo.id,
        updateTodoInput: {
          title: todoTitle,
          status: todo.status === 'pending' ? 'done' : 'pending',
        },
      });
    } catch (error) {
      toast({
        title: 'エラーが発生しました',
        description: 'Todoの更新に失敗しました',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleClickDelete = async () => {
    try {
      await deleteTodo({ deleteTodoId: todo.id });
    } catch (error) {
      toast({
        title: 'エラーが発生しました',
        description: 'Todoの削除に失敗しました',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      alignItems="center"
      padding="10px"
      borderRadius="10px"
      border="1px solid #d3d3d3"
    >
      <IconButton
        colorScheme={type === 'complete' ? 'green' : 'gray'}
        isRound
        size="xs"
        aria-label="done"
        icon={<CheckIcon />}
        marginRight="20px"
        position="relative"
        top="2px"
        onClick={handleCheck}
      />
      <Editable
        textAlign="left"
        fontSize="xl"
        onChange={handleChange}
        value={todoTitle}
        submitOnBlur
        onSubmit={handleSubmit}
        flex="1"
        isDisabled={type === 'complete'}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      {type === 'complete' && (
        <IconButton
          size="md"
          aria-label="delete"
          icon={<DeleteIcon />}
          onClick={handleClickDelete}
        />
      )}
    </Flex>
  );
};

export default EditableTodo;
