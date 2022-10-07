import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../../../common/config/Color';

type TodoInputProps = {
  defaultValue?: string;
  onSubmit: (textInputValue: string) => void;
};

export const TodoInput: React.FC<TodoInputProps> = ({ onSubmit, defaultValue }) => {
  const [textInputValue, setTextInputValue] = useState(defaultValue);

  const handleValueChange = useCallback((newTodo: string) => {
    setTextInputValue(newTodo);
  }, []);

  const handleSubmit = useCallback(() => {
    if (textInputValue) {
      onSubmit(textInputValue);
    }
  }, [onSubmit, textInputValue]);

  return (
    <View style={styles.row}>
      <TextInput
        multiline
        autoFocus
        style={styles.textInput}
        cursorColor={Color.Lightest}
        placeholder="What needs to be done?"
        value={textInputValue}
        onChangeText={handleValueChange}
        maxLength={300}
      />
      <TouchableOpacity disabled={!textInputValue} style={styles.submitButton} onPress={handleSubmit}>
        <Icon name="send" size={32} />
      </TouchableOpacity>
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
    marginHorizontal: 4,
  },
});
