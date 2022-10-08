import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import { TodoInputContainer, TodoInputContainerTestID } from '../TodoInputContainer';

describe('TodoInputContainer', () => {
  it('should render a view', () => {
    const { getByTestId } = render(<TodoInputContainer />);
    const view = getByTestId(TodoInputContainerTestID.ViewID);
    expect(view).toBeTruthy();
  });

  it('should render the view with correct styles', () => {
    const { getByTestId } = render(<TodoInputContainer />);
    const view = getByTestId(TodoInputContainerTestID.ViewID);

    expect(view).toHaveStyle({
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 8,
    });
  });

  it('should render all children inside the view', () => {
    const { getAllByTestId, getByTestId } = render(
      <TodoInputContainer>
        <View testID={'ChildTestID'} />
        <View testID={'ChildTestID'} />
      </TodoInputContainer>,
    );
    const parent = getByTestId(TodoInputContainerTestID.ViewID);
    const children = getAllByTestId('ChildTestID');

    expect(children).toHaveLength(2);
    expect(parent).toContainElement(children[0]);
    expect(parent).toContainElement(children[1]);
  });
});
