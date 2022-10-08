import React from 'react';
import { render } from '@testing-library/react-native';
import { AddTodoScreen, AddTodoScreenTestID } from '../AddTodoScreen';

const mockUseAddTodoHook = jest.fn().mockResolvedValue({
  handleAddTodo: () => {},
});
jest.mock('../../hooks/useAddTodo', () => ({
  useAddTodo: () => mockUseAddTodoHook(),
}));

describe('AddTodoScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render a container view', () => {
    const { getByTestId } = render(<AddTodoScreen />);
    const view = getByTestId(AddTodoScreenTestID.ContainerID);
    expect(view).toBeTruthy();
  });

  it('should render a text input', () => {
    const { getByTestId } = render(<AddTodoScreen />);
    const input = getByTestId(AddTodoScreenTestID.InputID);
    expect(input).toBeTruthy();
  });

  it('sould render the input as a child to the view', () => {
    const { getByTestId } = render(<AddTodoScreen />);
    const input = getByTestId(AddTodoScreenTestID.InputID);
    const view = getByTestId(AddTodoScreenTestID.ContainerID);
    expect(view).toContainElement(input);
  });

  it('sould call the useEditTodo hook', () => {
    render(<AddTodoScreen />);
    expect(mockUseAddTodoHook).toHaveBeenCalledTimes(1);
  });
});
