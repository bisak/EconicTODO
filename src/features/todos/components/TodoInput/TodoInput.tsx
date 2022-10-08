import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Color } from '../../../../common/config/Color';
import { ButtonIcon, IconName } from '../ButtonIcon/ButtonIcon';

type TodoInputProps = {
  defaultValue?: string;
  onSubmit: (textInputValue: string) => void;
  maxCharacters?: number;
  testID?: string;
};

export enum TodoInputTestID {
  ContainerID = 'ContainerID',
  RowID = 'RowID',
  TextInputID = 'TextInputID',
  ButtonID = 'ButtonID',
  CharactersLeftID = 'CharactersLeftID',
}

export const TodoInput: React.FC<TodoInputProps> = ({
  onSubmit,
  defaultValue,
  maxCharacters = 1000,
  testID = TodoInputTestID.ContainerID,
}) => {
  const [textInputValue, setTextInputValue] = useState(defaultValue);
  const trimmedContent = textInputValue?.trim();
  const charactersCount = textInputValue?.length || 0;

  const handleValueChange = useCallback((newTodo: string) => {
    setTextInputValue(newTodo);
  }, []);

  const handleSubmit = useCallback(() => {
    if (trimmedContent) {
      onSubmit(trimmedContent);
    }
  }, [onSubmit, trimmedContent]);

  return (
    <View testID={testID} style={styles.container}>
      <View testID={TodoInputTestID.RowID} style={styles.row}>
        <TextInput
          testID={TodoInputTestID.TextInputID}
          multiline
          autoFocus
          style={styles.textInput}
          cursorColor={Color.Lightest}
          placeholder="What needs to be done?"
          value={textInputValue}
          onChangeText={handleValueChange}
          maxLength={maxCharacters}
        />
        <ButtonIcon
          testID={TodoInputTestID.ButtonID}
          iconName={IconName.send}
          disabled={!trimmedContent}
          style={styles.submitButton}
          onPress={handleSubmit}
        />
      </View>
      <Text testID={TodoInputTestID.CharactersLeftID} style={styles.charactersLeft}>
        {charactersCount} of {maxCharacters}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: Color.Blue,
    borderRadius: 8,
    paddingRight: 52,
    paddingLeft: 8,
    fontSize: 18,
  },
  submitButton: {
    position: 'absolute',
    right: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 4,
  },
  charactersLeft: {
    textAlign: 'right',
    fontSize: 12,
    padding: 4,
  },
});
