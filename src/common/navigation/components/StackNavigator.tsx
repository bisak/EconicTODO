import React from 'react';
import { StackNavParamsList } from '../model/NavigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddTodoScreen } from '../../../features/todos/todo-add/screen/AddTodoScreen';
import { EditTodoScreen } from '../../../features/todos/todo-edit/screen/EditTodoScreen';
import { ScreenName } from '../../config/ScreenName';
import { TodosListScreen } from '../../../features/todos/todo-list/screen/TodosListScreen';

const Stack = createNativeStackNavigator<StackNavParamsList>();

export const TodosNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ title: 'Econic TODO' }} name={ScreenName.TodosList} component={TodosListScreen} />
    <Stack.Screen options={{ title: 'Econic TODO - Add' }} name={ScreenName.AddTodo} component={AddTodoScreen} />
    <Stack.Screen options={{ title: 'Econic TODO - Edit' }} name={ScreenName.EditTodo} component={EditTodoScreen} />
  </Stack.Navigator>
);
