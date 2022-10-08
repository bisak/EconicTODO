import React from 'react';
import { TodoInput } from '../../components/TodoInput/TodoInput';
import { TodoInputContainer } from '../../components/TodoInputContainer/TodoInputContainer';
import { useAddTodo } from '../hooks/useAddTodo';

export enum AddTodoScreenTestID {
  ContainerID = 'ContainerID',
  InputID = 'InputID',
}

export const AddTodoScreen: React.FC = () => {
  const { handleAddTodo } = useAddTodo();

  return (
    <TodoInputContainer testID={AddTodoScreenTestID.ContainerID}>
      <TodoInput testID={AddTodoScreenTestID.InputID} onSubmit={handleAddTodo} />
    </TodoInputContainer>
  );
};
