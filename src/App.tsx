import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './common/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { TodosNavigator } from './common/navigation/components/StackNavigator';
import { DarkTheme } from '@react-navigation/native';

export const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavigationContainer theme={DarkTheme}>
        <TodosNavigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
