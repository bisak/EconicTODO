import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { AddFAB, AddFABTestID } from '../AddFAB';
import { Color } from '../../../../../../common/config/Color';

describe('AddFAB', () => {
  it('should render a touchable', () => {
    const { getByTestId } = render(<AddFAB onPress={() => {}} />);
    const touchable = getByTestId(AddFABTestID.TouchableID);
    expect(touchable).toBeTruthy();
  });

  it('should render an icon', () => {
    const { getByTestId } = render(<AddFAB onPress={() => {}} />);
    const icon = getByTestId(AddFABTestID.IconID);
    expect(icon).toBeTruthy();
  });

  it('should call onPress when the touchable is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<AddFAB onPress={mockOnPress} />);
    const touchable = getByTestId(AddFABTestID.TouchableID);
    fireEvent(touchable, 'press');
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should render the touchable with correct styles', () => {
    const { getByTestId } = render(<AddFAB onPress={() => {}} />);
    const touchable = getByTestId(AddFABTestID.TouchableID);
    expect(touchable).toHaveStyle({
      position: 'absolute',
      right: 22,
      bottom: 22,
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.Blue,
      opacity: 0.9,
    });
  });
});
