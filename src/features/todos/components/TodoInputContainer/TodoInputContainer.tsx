import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

type TodoInputContainerProps = {
  testID?: string;
};

export enum TodoInputContainerTestID {
  ViewID = 'ViewID',
}

export const TodoInputContainer: React.FC<PropsWithChildren<TodoInputContainerProps>> = ({
  children,
  testID = TodoInputContainerTestID.ViewID,
}) => {
  return (
    <View testID={testID} style={styles.inputContainer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});
