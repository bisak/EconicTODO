import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useAppDispatch } from '../../../../common/store/hook/useAppDispatch';
import { useAppSelector } from '../../../../common/store/hook/useAppSelector';
import { completeTodoAction, deleteTodoAction } from '../../slice/todosActions';
import { selectCompletedTodosCount, selectFilteredTodos, selectVisibleTodosCount } from '../../slice/todosSelectors';
import { TodoFilter } from '../model/TodoFilter';

export const useTodosList = (defaultFilter = TodoFilter.All) => {
  const [filterValue, setFilterValue] = useState(defaultFilter);

  const todoItems = useAppSelector(selectFilteredTodos(filterValue));
  const completedTodosCount = useAppSelector(selectCompletedTodosCount);
  const allTodosCount = useAppSelector(selectVisibleTodosCount);

  const dispatch = useAppDispatch();

  const handleDeleteTodo = useCallback(
    (todoId: string) => {
      Alert.alert('Delete Todo?', 'Do you really want to delete this todo?', [
        { text: 'No, keep it' },
        {
          text: 'Yes',
          onPress: () => dispatch(deleteTodoAction({ id: todoId })),
        },
      ]);
    },
    [dispatch],
  );

  const handleCompleteTodo = useCallback(
    (todoId: string, isDone: boolean) => {
      dispatch(completeTodoAction({ id: todoId, isDone }));
    },
    [dispatch],
  );

  return {
    todoItems,
    completedTodosCount,
    allTodosCount,
    filterValue,
    setFilterValue,
    handleDeleteTodo,
    handleCompleteTodo,
  };
};
