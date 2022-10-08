import React from 'react';
import { render } from '@testing-library/react-native';
import { EditTodoScreen, EditTodoScreenTestID } from '../EditTodoScreen';

const mockUseEditTodoHook = jest.fn().mockResolvedValue({
  handleEditTodo: () => {},
  todoItem: { content: '' },
});
jest.mock('../../hooks/useEditTodo', () => ({
  useEditTodo: () => mockUseEditTodoHook(),
}));

describe('EditTodoScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render a container view', () => {
    const { getByTestId } = render(<EditTodoScreen />);
    const view = getByTestId(EditTodoScreenTestID.ContainerID);
    expect(view).toBeTruthy();
  });

  it('should render a text input', () => {
    const { getByTestId } = render(<EditTodoScreen />);
    const input = getByTestId(EditTodoScreenTestID.InputID);
    expect(input).toBeTruthy();
  });

  it('sould render the input as a child to the view', () => {
    const { getByTestId } = render(<EditTodoScreen />);
    const input = getByTestId(EditTodoScreenTestID.InputID);
    const view = getByTestId(EditTodoScreenTestID.ContainerID);
    expect(view).toContainElement(input);
  });

  it('sould call the useEditTodo hook', () => {
    render(<EditTodoScreen />);
    expect(mockUseEditTodoHook).toHaveBeenCalledTimes(1);
  });
});
