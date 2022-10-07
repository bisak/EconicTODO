import React from 'react';
import { ScrollView } from 'react-native';
import { AddTodoFAB } from '../components/AddTodoFAB';
import { CompletedStats } from '../components/CompletedStats';
import { FilterDropDown } from '../components/FilterDropDown';
import { ScrollBottomBuffer } from '../components/ScrollBottomBuffer';
import { TodoCardComponent } from '../components/TodoCardComponent';
import { useTodosList } from '../hooks/useTodosList';

export const TodosListScreen: React.FC = () => {
  const {
    todoItems,
    completedTodosCount,
    allTodosCount,
    filterValue,
    setFilterValue,
    handleAddTodoPress,
    handleEditTodo,
    handleCompleteTodo,
    handleDeleteTodo,
  } = useTodosList();

  return (
    <>
      <FilterDropDown onChange={setFilterValue} value={filterValue} />
      <CompletedStats completed={completedTodosCount} total={allTodosCount} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {todoItems.map(({ content, isDone, id }) => (
          <TodoCardComponent
            key={id}
            content={content}
            isDone={isDone}
            onDeletePress={() => handleDeleteTodo(id)}
            onEditPress={() => handleEditTodo(id)}
            onDonePress={() => handleCompleteTodo(id, !isDone)}
          />
        ))}
        <ScrollBottomBuffer />
      </ScrollView>

      <AddTodoFAB onPress={handleAddTodoPress} />
    </>
  );
};
