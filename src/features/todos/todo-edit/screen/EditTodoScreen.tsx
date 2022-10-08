import React from 'react';
import { TodoInput } from '../../components/TodoInput/TodoInput';
import { TodoInputContainer } from '../../components/TodoInputContainer/TodoInputContainer';
import { useEditTodo } from '../hooks/useEditTodo';

export enum EditTodoScreenTestID {
  ContainerID = 'ContainerID',
  InputID = 'InputID',
}

export const EditTodoScreen: React.FC = () => {
  const { handleEditTodo, todoItem } = useEditTodo();

  return (
    <TodoInputContainer testID={EditTodoScreenTestID.ContainerID}>
      <TodoInput testID={EditTodoScreenTestID.InputID} defaultValue={todoItem?.content} onSubmit={handleEditTodo} />
    </TodoInputContainer>
  );
};
