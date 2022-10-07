import { CaseReducer, createReducer, EntityState, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './model/Todo';
import { AddTodoPayload, DeleteTodoPayload, EditTodoPayload, MarkTodoDonePayload } from './model/TodoActionsPayload';
import { addTodoAction, deleteTodoAction, editTodoAction, completeTodoAction } from './todosActions';
import { todosAdapter } from './todosAdapter';

export type TodosState = EntityState<Todo>;

const initialState = todosAdapter.getInitialState();

const addTodoReducer: CaseReducer<TodosState, PayloadAction<AddTodoPayload>> = (state, { payload }) => {
  const { content } = payload;
  todosAdapter.addOne(state, {
    id: nanoid(),
    content,
    isDeleted: false,
    isDone: false,
  });
};

const editTodoReducer: CaseReducer<TodosState, PayloadAction<EditTodoPayload>> = (state, { payload }) => {
  const { id, content } = payload;
  todosAdapter.updateOne(state, { id, changes: { content } });
};

const deleteTodoReducer: CaseReducer<TodosState, PayloadAction<DeleteTodoPayload>> = (state, { payload }) => {
  const { id } = payload;
  todosAdapter.updateOne(state, { id, changes: { isDeleted: true } });
};

const completeTodoReducer: CaseReducer<TodosState, PayloadAction<MarkTodoDonePayload>> = (state, { payload }) => {
  const { id, isDone } = payload;
  todosAdapter.updateOne(state, { id, changes: { isDone } });
};

export const todosReducer = createReducer(initialState, builder => {
  builder.addCase(addTodoAction, addTodoReducer);
  builder.addCase(editTodoAction, editTodoReducer);
  builder.addCase(deleteTodoAction, deleteTodoReducer);
  builder.addCase(completeTodoAction, completeTodoReducer);
});
