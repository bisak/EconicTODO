import { createAction } from '@reduxjs/toolkit';
import { AddTodoPayload, DeleteTodoPayload, EditTodoPayload, MarkTodoDonePayload } from './model/TodoActionsPayload';

export const addTodoAction = createAction<AddTodoPayload>('todos/add');
export const deleteTodoAction = createAction<DeleteTodoPayload>('todos/delete');
export const editTodoAction = createAction<EditTodoPayload>('todos/edit');
export const completeTodoAction = createAction<MarkTodoDonePayload>('todos/complete');

export const resetReducer = createAction('todos/reset');
