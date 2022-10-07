import React from 'react';
import { StackNavParamsList } from '../model/NavigationParams';
import { TodosListScreen } from '../../../features/todos/screens/TodosListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackNavParamsList>();

export const TodosNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ title: 'Econic TODO' }} name="TodosList" component={TodosListScreen} />
  </Stack.Navigator>
);
