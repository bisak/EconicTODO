import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import { TodoFilter } from '../model/TodoFilter';

type FilterDropDownProps = {
  onChange: (value: TodoFilter) => void;
  value: TodoFilter;
};

const filterOptions: ItemType<TodoFilter>[] = [
  { label: 'All', value: TodoFilter.All },
  { label: 'Complete', value: TodoFilter.Complete },
  { label: 'Incomplete', value: TodoFilter.Incomplete },
];

export const FilterDropDown: React.FC<FilterDropDownProps> = ({ onChange, value }) => {
  const [open, setOpen] = useState(false);
  const [valueState, setValueState] = useState(value);
  const [items, setItems] = useState(filterOptions);

  const handleValueChange = (newValue: TodoFilter | null) => {
    if (newValue) {
      onChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        theme="DARK"
        open={open}
        value={valueState}
        items={items}
        setOpen={setOpen}
        setValue={setValueState}
        setItems={setItems}
        onChangeValue={handleValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 8,
  },
});
