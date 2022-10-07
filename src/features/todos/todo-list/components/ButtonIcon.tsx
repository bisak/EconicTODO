import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../../../common/config/Color';

export enum IconName {
  edit = 'edit',
  delete = 'delete',
  done = 'done',
  removeDone = 'remove-done',
}

type ButtonIconProps = {
  iconName: IconName;
  onPress: () => void;
};

const iconToColorMap: Record<IconName, Color> = {
  'remove-done': Color.Green,
  done: Color.Green,
  delete: Color.Red,
  edit: Color.Yellow,
};

export const ButtonIcon: React.FC<ButtonIconProps> = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <Icon color={iconToColorMap[iconName]} name={iconName} size={30} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  touchable: {
    paddingLeft: 12,
  },
});
