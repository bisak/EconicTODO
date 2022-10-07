import React from 'react';
import { StackNavParamsList } from '../model/NavigationTypes';
import { TodosListScreen } from '../../../features/todos/screens/TodosListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddTodoScreen } from '../../../features/todos/screens/AddTodoScreen';
import { EditTodoScreen } from '../../../features/todos/screens/EditTodoScreen';
import { ScreenName } from '../model/ScreenName';

const Stack = createNativeStackNavigator<StackNavParamsList>();

export const TodosNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ title: 'Econic TODO' }} name={ScreenName.TodosList} component={TodosListScreen} />
    <Stack.Screen options={{ title: 'Econic TODO - Add' }} name={ScreenName.AddTodo} component={AddTodoScreen} />
    <Stack.Screen options={{ title: 'Econic TODO - Edit' }} name={ScreenName.EditTodo} component={EditTodoScreen} />
  </Stack.Navigator>
);
