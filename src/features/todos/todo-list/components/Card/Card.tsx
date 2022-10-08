import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Color } from '../../../../../common/config/Color';
import { ButtonIcon, IconName } from '../../../components/ButtonIcon/ButtonIcon';

type CardProps = {
  content: string;
  isDone: boolean;
  onDonePress: () => void;
  onDeletePress: () => void;
  onEditPress: () => void;
  testID?: string;
};

export enum CardTestID {
  CardID = 'CardID',
  TextID = 'TextID',
  ButtonsContainerID = 'ButtonsContainerID',
  DeleteButonID = 'DeleteButonID',
  EditButonID = 'EditButonID',
  DoneButonID = 'DoneButonID',
}

export const Card: React.FC<CardProps> = ({
  content,
  isDone,
  onDonePress,
  onDeletePress,
  onEditPress,
  testID = CardTestID.CardID,
}) => {
  return (
    <View testID={testID} style={styles.card}>
      <Text testID={CardTestID.TextID} style={isDone ? [styles.content, styles.doneContent] : styles.content}>
        {content}
      </Text>
      <View testID={CardTestID.ButtonsContainerID} style={styles.actionsContainer}>
        <ButtonIcon
          style={styles.buttonIcon}
          testID={CardTestID.DoneButonID}
          iconName={isDone ? IconName.removeDone : IconName.done}
          onPress={onDonePress}
        />
        <ButtonIcon
          style={styles.buttonIcon}
          testID={CardTestID.EditButonID}
          iconName={IconName.edit}
          onPress={onEditPress}
        />
        <ButtonIcon
          style={styles.buttonIcon}
          testID={CardTestID.DeleteButonID}
          iconName={IconName.delete}
          onPress={onDeletePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    elevation: 1,
    minHeight: 100,
    backgroundColor: Color.CardBackground,
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 18,
    margin: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    flex: 1,
  },
  content: {
    fontSize: 16,
  },
  doneContent: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    opacity: 0.5,
  },
  buttonIcon: { paddingLeft: 12 },
});
