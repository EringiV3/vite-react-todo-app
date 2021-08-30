import { CheckIcon } from '@chakra-ui/icons';
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
import { updateTodoMutation } from '../graphql/mutation/updateTodo';
import {
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
  const [_, updateTodo] = useMutation<
    UpdateTodoMutation,
    UpdateTodoMutationVariables
  >(updateTodoMutation);
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

  const handleClick = async () => {
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
        onClick={handleClick}
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
    </Flex>
  );
};

export default EditableTodo;
