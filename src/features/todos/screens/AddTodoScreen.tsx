import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoInput } from '../components/TodoInput';
import { useAddTodo } from '../hooks/useAddTodo';

export const AddTodoScreen: React.FC = () => {
  const { handleAddTodo } = useAddTodo();

  return (
    <View style={styles.centerVertical}>
      <TodoInput onSubmit={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  centerVertical: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});
