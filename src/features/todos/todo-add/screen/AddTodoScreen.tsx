import React from 'react';
import { TodoInput } from '../../components/TodoInput/TodoInput';
import { TodoInputContainer } from '../../components/TodoInputContainer/TodoInputContainer';
import { useAddTodo } from '../hooks/useAddTodo';

export const AddTodoScreen: React.FC = () => {
  const { handleAddTodo } = useAddTodo();

  return (
    <TodoInputContainer>
      <TodoInput onSubmit={handleAddTodo} />
    </TodoInputContainer>
  );
};
