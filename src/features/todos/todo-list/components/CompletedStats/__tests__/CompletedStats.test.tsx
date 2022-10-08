import React from 'react';
import { render } from '@testing-library/react-native';
import { CompletedStats } from '../CompletedStats';

describe('CompletedStats', () => {
  it('should render the correct text for 0 entries', () => {
    const { getByText } = render(<CompletedStats completed={0} total={0} />);
    const textElement = getByText('Completed 0 of 0');
    expect(textElement).toBeTruthy();
  });

  it('should render the correct text for more than 0 entries', () => {
    const { getByText } = render(<CompletedStats completed={1} total={2} />);
    const textElement = getByText('Completed 1 of 2');
    expect(textElement).toBeTruthy();
  });

  it('should render with correct styles', () => {
    const { getByText } = render(<CompletedStats completed={1} total={2} />);
    const textElement = getByText('Completed 1 of 2');
    expect(textElement).toHaveStyle({
      textAlign: 'right',
      marginHorizontal: 20,
      padding: 4,
    });
  });
});
