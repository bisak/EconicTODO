import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { todosReducer } from '../../features/todos/slice/todosReducer';
import { todosReducerPersistConfig } from './config/persistConfig';

const persistedTodosReducer = persistReducer(todosReducerPersistConfig, todosReducer);

export const rootReducer = combineReducers({
  todos: persistedTodosReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      /* Disables serilizability check for redux-persist built-in actions. */
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
