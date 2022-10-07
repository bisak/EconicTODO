import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../../common/config/Color';

type AddTodoFABProps = {
  onPress: () => void;
};

export const AddTodoFAB: React.FC<AddTodoFABProps> = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.65} style={styles.fab} onPress={onPress}>
      <Icon name="add" size={32} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 22,
    bottom: 22,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.Blue,
    opacity: 0.9,
  },
});
