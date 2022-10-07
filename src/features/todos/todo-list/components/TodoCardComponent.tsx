import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Color } from '../../../../common/config/Color';
import { ButtonIcon, IconName } from './ButtonIcon';

type CardsComponentsProps = {
  content: string;
  isDone: boolean;
  onDonePress: () => void;
  onDeletePress: () => void;
  onEditPress: () => void;
};

export const TodoCardComponent: React.FC<CardsComponentsProps> = ({
  content,
  isDone,
  onDonePress,
  onDeletePress,
  onEditPress,
}) => {
  return (
    <View style={styles.card}>
      <Text style={isDone ? [styles.content, styles.doneContent] : styles.content}>{content}</Text>
      <View style={styles.actionsContainer}>
        <ButtonIcon iconName={IconName.done} onPress={onDonePress} />
        <ButtonIcon iconName={IconName.edit} onPress={onEditPress} />
        <ButtonIcon iconName={IconName.delete} onPress={onDeletePress} />
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
});
