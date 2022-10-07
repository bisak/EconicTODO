import React from 'react';
import { TodoInput } from '../../components/TodoInput/TodoInput';
import { TodoInputContainer } from '../../components/TodoInputContainer/TodoInputContainer';
import { useEditTodo } from '../hooks/useEditTodo';

export const EditTodoScreen: React.FC = () => {
  const { handleEditTodo, todoItem } = useEditTodo();

  return (
    <TodoInputContainer>
      <TodoInput defaultValue={todoItem?.content} onSubmit={handleEditTodo} />
    </TodoInputContainer>
  );
};
