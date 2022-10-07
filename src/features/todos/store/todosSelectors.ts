import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../common/store/model/Store';
import { TodoFilter } from '../todo-list/model/TodoFilter';
import { todosAdapter } from './todosAdapter';

const selectTodosState = (state: RootState) => state.todos;

export const {
  selectById: selectTodoById,
  selectAll: selectAllTodos,
  selectTotal: selectTodosCount,
} = todosAdapter.getSelectors<RootState>(selectTodosState);

const selectVisibleTodos = createSelector(selectAllTodos, storeTodos =>
  storeTodos.filter(({ isDeleted }) => !isDeleted),
);

export const selectFilteredTodos = (filter: TodoFilter) =>
  createSelector(selectVisibleTodos, storeTodos =>
    storeTodos.filter(({ isDone }) => {
      switch (filter) {
        case TodoFilter.Complete:
          return isDone;
        case TodoFilter.Incomplete:
          return !isDone;
        case TodoFilter.All:
        default:
          return true;
      }
    }),
  );

export const selectCompletedTodosCount = createSelector(
  selectVisibleTodos,
  storeTodos => storeTodos.filter(({ isDone }) => isDone).length,
);

export const selectVisibleTodosCount = createSelector(selectVisibleTodos, storeTodos => storeTodos.length);
