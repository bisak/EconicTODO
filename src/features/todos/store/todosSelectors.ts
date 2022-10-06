import { todosAdapter } from './todosAdapter';

export const {
  selectById: selectTodoById,
  selectAll: selectAllTodos,
  selectTotal: selectTodosCount,
} = todosAdapter.getSelectors();
