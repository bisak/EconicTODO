import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../../../common/config/Color';

export enum IconName {
  edit = 'edit',
  delete = 'delete',
  done = 'done',
  removeDone = 'remove-done',
  send = 'send',
}

type ButtonIconProps = {
  iconName: IconName;
  onPress: () => void;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export const iconToColorMap: Record<IconName, Color> = {
  'remove-done': Color.Green,
  done: Color.Green,
  delete: Color.Red,
  edit: Color.Yellow,
  send: Color.Lightest,
};

export enum ButtonIconTestID {
  TouchableID = 'TouchableID',
  IconID = 'IconID',
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  iconName,
  onPress,
  style,
  disabled,
  testID = ButtonIconTestID.TouchableID,
}) => (
  <TouchableOpacity testID={testID} disabled={disabled} style={style} onPress={onPress}>
    <Icon testID={ButtonIconTestID.IconID} color={iconToColorMap[iconName]} name={iconName} size={32} />
  </TouchableOpacity>
);
