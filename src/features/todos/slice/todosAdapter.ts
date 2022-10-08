import { createEntityAdapter } from '@reduxjs/toolkit';
import { Todo } from './model/Todo';

export const todosAdapter = createEntityAdapter<Todo>({
  selectId: todo => todo.id,
  sortComparer: (a, b) => a.content.localeCompare(b.content),
});
