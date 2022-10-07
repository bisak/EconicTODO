import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenName } from '../../config/ScreenName';

type EditTodoParams = {
  todoId: string;
};

export type StackNavParamsList = {
  TodosList: undefined;
  AddTodo: undefined;
  EditTodo: EditTodoParams;
};

export type EditTodoScreenProps = NativeStackScreenProps<StackNavParamsList, ScreenName.EditTodo>;
