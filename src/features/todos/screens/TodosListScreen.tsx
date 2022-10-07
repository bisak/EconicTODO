import React from 'react';
import { ScrollView } from 'react-native';
import { TodoCardComponent } from '../components/TodoCardComponent';
import { storeTodosMock } from '../store/__mocks__/storeTodos.mock';

export const TodosListScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TodoCardComponent content={storeTodosMock[0].content} isDone={false} onPress={() => {}} />
      <TodoCardComponent content={storeTodosMock[1].content} isDone={false} onPress={() => {}} />
      <TodoCardComponent content={storeTodosMock[2].content} isDone={false} onPress={() => {}} />
      <TodoCardComponent content={storeTodosMock[0].content} isDone={false} onPress={() => {}} />
      <TodoCardComponent content={storeTodosMock[0].content} isDone={false} onPress={() => {}} />
      <TodoCardComponent content={storeTodosMock[0].content} isDone={false} onPress={() => {}} />
    </ScrollView>
  );
};
