import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { StackNavParamsList } from '../../../common/navigation/model/NavigationTypes';
import { ScreenName } from '../../../common/navigation/model/ScreenName';
import { useAppDispatch } from '../../../common/store/hook/useAppDispatch';
import { addTodoAction } from '../store/todosActions';

export const useAddTodo = () => {
  const { goBack, canGoBack } = useNavigation<NativeStackNavigationProp<StackNavParamsList, ScreenName.AddTodo>>();
  const dispatch = useAppDispatch();

  const handleAddTodo = useCallback(
    (content: string) => {
      dispatch(addTodoAction({ content }));
      if (canGoBack()) {
        goBack();
      }
    },
    [canGoBack, dispatch, goBack],
  );

  return { handleAddTodo };
};
