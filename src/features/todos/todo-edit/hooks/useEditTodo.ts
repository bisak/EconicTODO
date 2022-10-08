import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { StackNavParamsList } from '../../../../common/navigation/model/NavigationTypes';
import { ScreenName } from '../../../../common/config/ScreenName';
import { useAppDispatch } from '../../../../common/store/hook/useAppDispatch';
import { editTodoAction } from '../../slice/todosActions';
import { selectTodoById } from '../../slice/todosSelectors';
import { useAppSelector } from '../../../../common/store/hook/useAppSelector';

export const useEditTodo = () => {
  const { goBack, canGoBack } = useNavigation<NativeStackNavigationProp<StackNavParamsList, ScreenName.EditTodo>>();
  const {
    params: { todoId },
  } = useRoute<RouteProp<StackNavParamsList, ScreenName.EditTodo>>();

  const todoItem = useAppSelector(state => selectTodoById(state, todoId));
  const dispatch = useAppDispatch();

  const handleEditTodo = useCallback(
    (content: string) => {
      dispatch(editTodoAction({ content, id: todoId }));
      if (canGoBack()) {
        goBack();
      }
    },
    [canGoBack, dispatch, goBack, todoId],
  );

  return { handleEditTodo, todoItem };
};
