import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Color } from '../../../../../common/config/Color';
import { TodoInput, TodoInputTestID } from '../TodoInput';

describe('TodoInput', () => {
  describe('layout', () => {
    it('should render a container view', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const view = getByTestId(TodoInputTestID.ContainerID);
      expect(view).toBeTruthy();
    });

    it('should render a row view', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const view = getByTestId(TodoInputTestID.RowID);
      expect(view).toBeTruthy();
    });

    it('should render a text input', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const textInput = getByTestId(TodoInputTestID.TextInputID);
      expect(textInput).toBeTruthy();
    });

    it('should render a text input with default text', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} defaultValue="mock-default" />);
      const textInput = getByTestId(TodoInputTestID.TextInputID);
      expect(textInput.props.value).toBe('mock-default');
    });

    it('should render a button', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const button = getByTestId(TodoInputTestID.ButtonID);
      expect(button).toBeTruthy();
    });

    it('should render the text input and button as children of the row', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const row = getByTestId(TodoInputTestID.RowID);
      const textInput = getByTestId(TodoInputTestID.TextInputID);
      const button = getByTestId(TodoInputTestID.ButtonID);
      expect(row).toContainElement(textInput);
      expect(row).toContainElement(button);
    });

    it('should render a characters left text', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const text = getByTestId(TodoInputTestID.CharactersLeftID);
      expect(text).toBeTruthy();
    });

    it('should render a characters left text with correct default value', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const text = getByTestId(TodoInputTestID.CharactersLeftID);
      expect(text).toHaveTextContent('0 of 1000');
    });

    it('should render a characters left text with correct value', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} maxCharacters={5} />);
      const text = getByTestId(TodoInputTestID.CharactersLeftID);
      expect(text).toHaveTextContent('0 of 5');
    });

    it('should render a characters left text with correct current value', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const text = getByTestId(TodoInputTestID.CharactersLeftID);
      const textInput = getByTestId(TodoInputTestID.TextInputID);
      fireEvent.changeText(textInput, '123  ');
      expect(text).toHaveTextContent('5 of 1000');
    });
  });

  describe('styles', () => {
    it('should render the container view with correct styles', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const view = getByTestId(TodoInputTestID.ContainerID);
      expect(view).toHaveStyle({ marginHorizontal: 4 });
    });

    it('should render the row view with correct styles', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const view = getByTestId(TodoInputTestID.RowID);
      expect(view).toHaveStyle({
        flexDirection: 'row',
        alignItems: 'center',
      });
    });

    it('should render the text input with correct styles', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const textInput = getByTestId(TodoInputTestID.TextInputID);
      expect(textInput).toHaveStyle({
        flex: 1,
        borderWidth: 2,
        borderColor: Color.Blue,
        borderRadius: 8,
        paddingRight: 52,
        paddingLeft: 8,
        fontSize: 18,
      });
    });

    it('should render the button with correct styles', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const button = getByTestId(TodoInputTestID.ButtonID);
      expect(button).toHaveStyle({
        position: 'absolute',
        right: 12,
      });
    });

    it('should render a characters left text with correct styles', () => {
      const { getByTestId } = render(<TodoInput onSubmit={() => {}} />);
      const text = getByTestId(TodoInputTestID.CharactersLeftID);
      expect(text).toHaveStyle({
        textAlign: 'right',
        fontSize: 12,
        padding: 4,
      });
    });
  });

  describe('onSubmit', () => {
    it('should not call onSubmit if there is no content after trimming', () => {
      const mockOnSubmit = jest.fn();
      const { getByTestId } = render(<TodoInput onSubmit={mockOnSubmit} />);
      const button = getByTestId(TodoInputTestID.ButtonID);
      const textInput = getByTestId(TodoInputTestID.TextInputID);
      fireEvent.changeText(textInput, '        ');
      fireEvent.press(button);
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should call onSubmit if there is content after trimming', () => {
      const mockOnSubmit = jest.fn();
      const { getByTestId } = render(<TodoInput onSubmit={mockOnSubmit} />);
      const button = getByTestId(TodoInputTestID.ButtonID);
      const textInput = getByTestId(TodoInputTestID.TextInputID);
      fireEvent.changeText(textInput, '    .    ');
      fireEvent.press(button);
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
