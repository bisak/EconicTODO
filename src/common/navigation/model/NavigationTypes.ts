type EditTodoParams = {
  todoId: string;
};

export type StackNavParamsList = {
  TodosList: undefined;
  AddTodo: undefined;
  EditTodo: EditTodoParams;
};
