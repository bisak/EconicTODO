import React from 'react';
import { render } from '@testing-library/react-native';
import { TodosListScreen, TodosListScreenTestID } from '../TodosListScreen';
import { TodoFilter } from '../../model/TodoFilter';
import { storeTodosMock } from '../../../slice/__mocks__/storeTodos.mock';

const mockTodoItems = jest.fn().mockReturnValue([]);
const mockFilterValue = TodoFilter.All;
jest.mock('../../hooks/useTodosList', () => ({
  useTodosList: () => ({
    todoItems: mockTodoItems(),
    completedTodosCount: 0,
    allTodosCount: 0,
    filterValue: mockFilterValue,
    setFilterValue: () => {},
    handleCompleteTodo: () => {},
    handleDeleteTodo: () => {},
  }),
}));

jest.mock('../../hooks/useTodosListNavigation', () => ({
  useTodosListNavigation: () => ({
    handleAddTodoPress: () => {},
    handleEditTodo: () => {},
  }),
}));

describe('TodosListScreen', () => {
  describe('layout', () => {
    it('should render a filter dropdown', () => {
      const { getByTestId } = render(<TodosListScreen />);
      const dropDown = getByTestId(TodosListScreenTestID.FilterDropDownID);
      expect(dropDown).toBeTruthy();
    });

    it('should render a stats component', () => {
      const { getByTestId } = render(<TodosListScreen />);
      const stats = getByTestId(TodosListScreenTestID.CompletedStatsID);
      expect(stats).toBeTruthy();
    });

    it('should render a scroll view', () => {
      const { getByTestId } = render(<TodosListScreen />);
      const scrollView = getByTestId(TodosListScreenTestID.ScrollViewID);
      expect(scrollView).toBeTruthy();
    });

    it('should not render a card when the list is empty', () => {
      const { queryByTestId } = render(<TodosListScreen />);
      const card = queryByTestId(TodosListScreenTestID.CardID);
      expect(card).toBeFalsy();
    });

    it('should render correct number of cards when the list has items', () => {
      mockTodoItems.mockReturnValueOnce(storeTodosMock);
      const { getAllByTestId } = render(<TodosListScreen />);
      const cards = getAllByTestId(TodosListScreenTestID.CardID);
      expect(cards).toBeTruthy();
      expect(cards).toHaveLength(storeTodosMock.length);
    });

    it('should render a scroll view buffer', () => {
      const { getByTestId } = render(<TodosListScreen />);
      const scrollViewBuffer = getByTestId(TodosListScreenTestID.ScrollBottomBufferID);
      expect(scrollViewBuffer).toBeTruthy();
    });

    it('should render a floating action button', () => {
      const { getByTestId } = render(<TodosListScreen />);
      const FAB = getByTestId(TodosListScreenTestID.FABID);
      expect(FAB).toBeTruthy();
    });

    it('should render correct items inside the scroll view', () => {
      mockTodoItems.mockReturnValueOnce([storeTodosMock[0]]);

      const { getByTestId } = render(<TodosListScreen />);
      const dropDown = getByTestId(TodosListScreenTestID.FilterDropDownID);
      const stats = getByTestId(TodosListScreenTestID.CompletedStatsID);
      const scrollView = getByTestId(TodosListScreenTestID.ScrollViewID);
      const card = getByTestId(TodosListScreenTestID.CardID);
      const scrollViewBuffer = getByTestId(TodosListScreenTestID.ScrollBottomBufferID);
      const FAB = getByTestId(TodosListScreenTestID.FABID);

      expect(scrollView).not.toContainElement(dropDown);
      expect(scrollView).not.toContainElement(stats);
      expect(scrollView).toContainElement(card);
      expect(scrollView).toContainElement(scrollViewBuffer);
      expect(scrollView).not.toContainElement(FAB);
    });
  });
});
