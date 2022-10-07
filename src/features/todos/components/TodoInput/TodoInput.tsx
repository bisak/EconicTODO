import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../../../common/config/Color';

type TodoInputProps = {
  defaultValue?: string;
  onSubmit: (textInputValue: string) => void;
  maxCharacters?: number;
};

export const TodoInput: React.FC<TodoInputProps> = ({ onSubmit, defaultValue, maxCharacters = 300 }) => {
  const [textInputValue, setTextInputValue] = useState(defaultValue);
  const trimmedContent = textInputValue?.trim();

  const handleValueChange = useCallback((newTodo: string) => {
    setTextInputValue(newTodo);
  }, []);

  const handleSubmit = useCallback(() => {
    if (trimmedContent) {
      onSubmit(trimmedContent);
    }
  }, [onSubmit, trimmedContent]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          multiline
          autoFocus
          style={styles.textInput}
          cursorColor={Color.Lightest}
          placeholder="What needs to be done?"
          value={textInputValue}
          onChangeText={handleValueChange}
          maxLength={maxCharacters}
        />
        <TouchableOpacity disabled={!trimmedContent} style={styles.submitButton} onPress={handleSubmit}>
          <Icon name="send" size={32} />
        </TouchableOpacity>
      </View>
      <Text style={styles.charactersLeft}>
        {textInputValue?.length || 0} of {maxCharacters}
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
