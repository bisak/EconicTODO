import React from 'react';
import { ScrollView } from 'react-native';
import { AddFAB } from '../components/AddFAB/AddFAB';
import { CompletedStats } from '../components/CompletedStats/CompletedStats';
import { FilterDropDown } from '../components/FilterDropDown/FilterDropDown';
import { ScrollBottomBuffer } from '../components/ScrollBottomBuffer/ScrollBottomBuffer';
import { Card } from '../components/Card/Card';
import { useTodosList } from '../hooks/useTodosList';
import { useTodosListNavigation } from '../hooks/useTodosListNavigation';

export enum TodosListScreenTestID {
  FilterDropDownID = 'FilterDropDownID',
  CompletedStatsID = 'CompletedStatsID',
  ScrollViewID = 'ScrollViewID',
  CardID = 'CardID',
  ScrollBottomBufferID = 'ScrollBottomBufferID',
  FABID = 'FABID',
}

export const TodosListScreen: React.FC = () => {
  const {
    todoItems,
    completedTodosCount,
    allTodosCount,
    filterValue,
    setFilterValue,
    handleCompleteTodo,
    handleDeleteTodo,
  } = useTodosList();

  const { handleAddTodo, handleEditTodo } = useTodosListNavigation();

  return (
    <>
      <FilterDropDown testID={TodosListScreenTestID.FilterDropDownID} onChange={setFilterValue} value={filterValue} />
      <CompletedStats
        testID={TodosListScreenTestID.CompletedStatsID}
        completed={completedTodosCount}
        total={allTodosCount}
      />

      <ScrollView testID={TodosListScreenTestID.ScrollViewID} showsVerticalScrollIndicator={false}>
        {todoItems.map(({ content, isDone, id }) => (
          <Card
            testID={TodosListScreenTestID.CardID}
            key={id}
            content={content}
            isDone={isDone}
            onDeletePress={() => handleDeleteTodo(id)}
            onEditPress={() => handleEditTodo(id)}
            onDonePress={() => handleCompleteTodo(id, !isDone)}
          />
        ))}
        <ScrollBottomBuffer testID={TodosListScreenTestID.ScrollBottomBufferID} />
      </ScrollView>

      <AddFAB testID={TodosListScreenTestID.FABID} onPress={handleAddTodo} />
    </>
  );
};
