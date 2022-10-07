import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

export const TodoInputContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});
