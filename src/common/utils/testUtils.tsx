import React, { PropsWithChildren } from 'react';
import { renderHook } from '@testing-library/react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from '../store/store';

export const testStore = configureStore({ reducer: rootReducer });

export const appRenderHook: typeof renderHook = (hook, options) => {
  const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return <Provider store={testStore}>{children}</Provider>;
  };

  return renderHook(hook, { wrapper: Wrapper, ...options } as any);
};
