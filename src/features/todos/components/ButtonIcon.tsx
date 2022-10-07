import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export enum IconName {
  edit = 'edit',
  delete = 'delete',
  done = 'done',
}

type ButtonIconProps = {
  iconName: IconName;
  onPress: () => void;
};

const iconToColorMap: Record<IconName, string> = {
  done: 'green',
  delete: 'darkred',
  edit: 'goldenrod',
};

export const ButtonIcon: React.FC<ButtonIconProps> = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <Icon color={iconToColorMap[iconName]} name={iconName} size={32} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  touchable: {
    paddingRight: 14,
  },
});
