import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistConfig } from 'redux-persist';
import { TodosState } from '../../../features/todos/store/todosReducer';

export const todosReducerPersistConfig: PersistConfig<TodosState> = {
  /* Seting keyPrefix explicitly because some storage engines don't play nicely with the semicolons it contains by default */
  keyPrefix: '',
  key: 'persistedTodos',
  storage: AsyncStorage,
};
