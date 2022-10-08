import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import { TodoFilter } from '../../model/TodoFilter';

type FilterDropDownProps = {
  onChange: (value: TodoFilter) => void;
  value: TodoFilter;
  testID?: string;
};

export const filterOptions: ItemType<TodoFilter>[] = [
  { label: 'All', value: TodoFilter.All },
  { label: 'Complete', value: TodoFilter.Complete },
  { label: 'Incomplete', value: TodoFilter.Incomplete },
];

export enum FilterDropDownTestID {
  FilterDropDownViewID = 'FilterDropDownViewID',
  DropDownPickerID = 'DropDownPickerID',
}

export const FilterDropDown: React.FC<FilterDropDownProps> = ({
  onChange,
  value,
  testID = FilterDropDownTestID.FilterDropDownViewID,
}) => {
  const [open, setOpen] = useState(false);
  const [valueState, setValueState] = useState(value);
  const [items, setItems] = useState(filterOptions);

  const handleValueChange = useCallback(
    (newValue: TodoFilter | null) => {
      if (newValue) {
        onChange(newValue);
      }
    },
    [onChange],
  );

  return (
    <View testID={testID} style={styles.container}>
      <DropDownPicker
        testID={FilterDropDownTestID.DropDownPickerID}
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
