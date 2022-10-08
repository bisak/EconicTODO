import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { StackNavParamsList } from '../../../../common/navigation/model/NavigationTypes';
import { ScreenName } from '../../../../common/config/ScreenName';

export const useTodosListNavigation = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<StackNavParamsList, ScreenName.TodosList>>();

  const handleAddTodo = useCallback(() => {
    navigate(ScreenName.AddTodo);
  }, [navigate]);

  const handleEditTodo = useCallback(
    (todoId: string) => {
      navigate(ScreenName.EditTodo, { todoId });
    },
    [navigate],
  );

  return {
    handleAddTodo,
    handleEditTodo,
  };
};
