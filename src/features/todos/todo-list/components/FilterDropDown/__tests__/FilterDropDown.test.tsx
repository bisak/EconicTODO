import React from 'react';
import { render } from '@testing-library/react-native';
import { FilterDropDown, FilterDropDownTestID, filterOptions } from '../FilterDropDown';
import { TodoFilter } from '../../../model/TodoFilter';

describe('FilterDropDown', () => {
  it('should render a wrapper view', () => {
    const { getByTestId } = render(<FilterDropDown onChange={() => {}} value={TodoFilter.All} />);
    const view = getByTestId(FilterDropDownTestID.FilterDropDownViewID);
    expect(view).toBeTruthy();
  });

  it('should render the wrapper view with correct styles', () => {
    const { getByTestId } = render(<FilterDropDown onChange={() => {}} value={TodoFilter.All} />);
    const view = getByTestId(FilterDropDownTestID.FilterDropDownViewID);
    expect(view).toHaveStyle({
      marginHorizontal: 20,
      marginVertical: 8,
      zIndex: 2,
    });
  });

  it('should render a dropdown', () => {
    const { getByTestId } = render(<FilterDropDown onChange={() => {}} value={TodoFilter.All} />);
    const dropDown = getByTestId(FilterDropDownTestID.DropDownPickerID);
    expect(dropDown).toBeTruthy();
  });

  it('should have correct default items', () => {
    expect(filterOptions).toMatchInlineSnapshot(`
      Array [
        Object {
          "label": "All",
          "value": "All",
        },
        Object {
          "label": "Complete",
          "value": "Complete",
        },
        Object {
          "label": "Incomplete",
          "value": "Incomplete",
        },
      ]
    `);
  });
});
