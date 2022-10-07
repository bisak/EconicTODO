import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { StackNavParamsList } from '../../../common/navigation/model/NavigationTypes';
import { ScreenName } from '../../../common/navigation/model/ScreenName';
import { useAppDispatch } from '../../../common/store/hook/useAppDispatch';
import { useAppSelector } from '../../../common/store/hook/useAppSelector';
import { TodoFilter } from '../model/TodoFilter';
import { completeTodoAction, deleteTodoAction } from '../store/todosActions';
import { selectCompletedTodosCount, selectFilteredTodos, selectVisibleTodosCount } from '../store/todosSelectors';

export const useTodosList = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<StackNavParamsList, ScreenName.TodosList>>();

  const [filterValue, setFilterValue] = useState(TodoFilter.All);

  const todoItems = useAppSelector(selectFilteredTodos(filterValue));
  const completedTodosCount = useAppSelector(selectCompletedTodosCount);
  const allTodosCount = useAppSelector(selectVisibleTodosCount);

  const dispatch = useAppDispatch();

  const handleAddTodoPress = useCallback(() => {
    navigate(ScreenName.AddTodo);
  }, [navigate]);

  const handleEditTodo = useCallback(
    (todoId: string) => {
      navigate(ScreenName.EditTodo, { todoId });
    },
    [navigate],
  );

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
    handleAddTodoPress,
    handleDeleteTodo,
    handleEditTodo,
    handleCompleteTodo,
  };
};
