export type AddTodoPayload = { content: string };
export type DeleteTodoPayload = { id: string };
export type EditTodoPayload = { content: string; id: string };
export type MarkTodoDonePayload = { id: string; isDone: boolean };
