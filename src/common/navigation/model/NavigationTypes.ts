import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type EditTodoParams = {
  todoId: string;
};

export type StackNavParamsList = {
  TodosList: undefined;
  AddTodo: undefined;
  EditTodo: EditTodoParams;
};

export type EditTodoScreenProps = NativeStackScreenProps<StackNavParamsList, 'EditTodo'>;
