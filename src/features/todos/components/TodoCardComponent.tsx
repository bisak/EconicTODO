import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
      <Text style={isDone ? [styles.content, styles.strikeThroughContent] : styles.content}>{content}</Text>
      <View style={styles.actionsContainer}>
        <ButtonIcon iconName={IconName.delete} onPress={onDeletePress} />
        <ButtonIcon iconName={IconName.edit} onPress={onEditPress} />
        <ButtonIcon iconName={IconName.done} onPress={onDonePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    elevation: 1,
    minHeight: 100,
    backgroundColor: '#232d36',
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 12,
    margin: 8,
  },
  actionsContainer: {
    flexDirection: 'row-reverse',
    marginTop: 12,
  },
  content: {
    fontSize: 16,
  },
  strikeThroughContent: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
