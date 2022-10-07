import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { todosReducer } from '../../features/todos/store/todosReducer';
import { todosReducerPersistConfig } from './config/persistConfig';

const persistedTodosReducer = persistReducer(todosReducerPersistConfig, todosReducer);

export const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      /* Disables serilizability check for redux-persist built-in actions. */
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
