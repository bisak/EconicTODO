import React from 'react';
import { render } from '@testing-library/react-native';
import { ScrollBottomBuffer, ScrollBottomBufferTestID } from '../ScrollBottomBuffer';

describe('ScrollBottomBuffer', () => {
  it('should render a view', () => {
    const { getByTestId } = render(<ScrollBottomBuffer />);
    const view = getByTestId(ScrollBottomBufferTestID.ViewID);
    expect(view).toBeTruthy();
  });

  it('should render the view with correct height', () => {
    const { getByTestId } = render(<ScrollBottomBuffer />);
    const view = getByTestId(ScrollBottomBufferTestID.ViewID);
    expect(view).toHaveStyle({ height: 80 });
  });
});
