import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { StackNavParamsList } from '../../../../common/navigation/model/NavigationTypes';
import { ScreenName } from '../../../../common/config/ScreenName';
import { useAppDispatch } from '../../../../common/store/hook/useAppDispatch';
import { editTodoAction } from '../../store/todosActions';
import { selectTodoById } from '../../store/todosSelectors';
import { useAppSelector } from '../../../../common/store/hook/useAppSelector';

export const useEditTodo = () => {
  const { goBack, canGoBack } = useNavigation<NativeStackNavigationProp<StackNavParamsList, ScreenName.EditTodo>>();
  const { params } = useRoute<RouteProp<StackNavParamsList, ScreenName.EditTodo>>();

  const todoItem = useAppSelector(state => selectTodoById(state, params.todoId));
  const dispatch = useAppDispatch();

  const handleEditTodo = useCallback(
    (content: string) => {
      dispatch(editTodoAction({ content, id: params.todoId }));
      if (canGoBack()) {
        goBack();
      }
    },
    [canGoBack, dispatch, goBack, params.todoId],
  );

  return { handleEditTodo, todoItem };
};
