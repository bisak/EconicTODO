import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ButtonIcon, ButtonIconTestID, IconName, iconToColorMap } from '../ButtonIcon';

describe('ButtonIcon', () => {
  it('should render a touchable', () => {
    const { getByTestId } = render(<ButtonIcon iconName={IconName.done} onPress={() => {}} />);
    const touchable = getByTestId(ButtonIconTestID.TouchableID);
    expect(touchable).toBeTruthy();
  });

  it('should render an icon', () => {
    const { getByTestId } = render(<ButtonIcon iconName={IconName.done} onPress={() => {}} />);
    const icon = getByTestId(ButtonIconTestID.IconID);
    expect(icon).toBeTruthy();
  });

  it('should call onPress when the touchable is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<ButtonIcon iconName={IconName.done} onPress={mockOnPress} />);
    const touchable = getByTestId(ButtonIconTestID.TouchableID);
    fireEvent(touchable, 'press');
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should render the touchable with correct styles', () => {
    const { getByTestId } = render(
      <ButtonIcon iconName={IconName.done} style={{ paddingLeft: 12 }} onPress={() => {}} />,
    );
    const touchable = getByTestId(ButtonIconTestID.TouchableID);
    expect(touchable).toHaveStyle({ paddingLeft: 12 });
  });

  it('should have a correct iconToColorMap', () => {
    expect(iconToColorMap).toMatchInlineSnapshot(`
      Object {
        "delete": "darkred",
        "done": "green",
        "edit": "goldenrod",
        "remove-done": "green",
        "send": "white",
      }
    `);
  });
});
