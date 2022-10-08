import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../../../../common/config/Color';

type AddFABProps = {
  onPress: () => void;
  testID?: string;
};

export enum AddFABTestID {
  TouchableID = 'TouchableID',
  IconID = 'IconID',
}

export const AddFAB: React.FC<AddFABProps> = ({ onPress, testID = AddFABTestID.TouchableID }) => (
  <TouchableOpacity testID={testID} activeOpacity={0.65} style={styles.fab} onPress={onPress}>
    <Icon testID={AddFABTestID.IconID} name="add" size={32} />
  </TouchableOpacity>
);

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
