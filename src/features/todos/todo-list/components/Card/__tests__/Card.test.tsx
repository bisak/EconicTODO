import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Card, CardTestID } from '../Card';
import { Color } from '../../../../../../common/config/Color';

describe('Card', () => {
  const getDefaultCard = (isDone = true) => (
    <Card
      content="mockContent"
      isDone={isDone}
      onDeletePress={() => {}}
      onEditPress={() => {}}
      onDonePress={() => {}}
    />
  );

  describe('layout', () => {
    it('should render a wrapper view', () => {
      const { getByTestId } = render(getDefaultCard());
      const view = getByTestId(CardTestID.CardID);
      expect(view).toBeTruthy();
    });

    it('should render a text when done = true', () => {
      const { getByTestId } = render(getDefaultCard());
      const text = getByTestId(CardTestID.TextID);
      expect(text).toBeTruthy();
    });

    it('should render a text when done = false', () => {
      const { getByTestId } = render(getDefaultCard(false));
      const text = getByTestId(CardTestID.TextID);
      expect(text).toBeTruthy();
    });

    it('should render the correct text', () => {
      const { getByTestId } = render(getDefaultCard(false));
      const text = getByTestId(CardTestID.TextID);
      expect(text).toHaveTextContent('mockContent');
    });

    it('should render the text inside the wrapper view', () => {
      const { getByTestId } = render(getDefaultCard(false));
      const text = getByTestId(CardTestID.TextID);
      const wrapper = getByTestId(CardTestID.CardID);
      expect(wrapper).toContainElement(text);
    });

    it('should render a wrapper for the action buttons', () => {
      const { getByTestId } = render(getDefaultCard());
      const view = getByTestId(CardTestID.ButtonsContainerID);
      expect(view).toBeTruthy();
    });

    it('should render a done action button', () => {
      const { getByTestId } = render(getDefaultCard());
      const button = getByTestId(CardTestID.DoneButonID);
      expect(button).toBeTruthy();
    });

    it('should render an edit action button', () => {
      const { getByTestId } = render(getDefaultCard());
      const button = getByTestId(CardTestID.EditButonID);
      expect(button).toBeTruthy();
    });

    it('should render a delete action button', () => {
      const { getByTestId } = render(getDefaultCard());
      const button = getByTestId(CardTestID.DeleteButonID);
      expect(button).toBeTruthy();
    });

    it('should render the buttons inside their wrapper', () => {
      const { getByTestId } = render(getDefaultCard());
      const buttonsContainer = getByTestId(CardTestID.ButtonsContainerID);
      expect(buttonsContainer).toContainElement(getByTestId(CardTestID.DoneButonID));
      expect(buttonsContainer).toContainElement(getByTestId(CardTestID.EditButonID));
      expect(buttonsContainer).toContainElement(getByTestId(CardTestID.DeleteButonID));
    });
  });

  describe('styles', () => {
    it('should be correct for the wrapper view', () => {
      const { getByTestId } = render(getDefaultCard());
      const view = getByTestId(CardTestID.CardID);
      expect(view).toHaveStyle({
        flex: 1,
        elevation: 1,
        minHeight: 100,
        backgroundColor: Color.CardBackground,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 18,
        margin: 8,
      });
    });

    it('should be correct for the text when done = true', () => {
      const { getByTestId } = render(getDefaultCard());
      const text = getByTestId(CardTestID.TextID);
      expect(text).toHaveStyle({
        fontSize: 16,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        opacity: 0.5,
      });
    });

    it('should be correct for the text when done = false', () => {
      const { getByTestId } = render(getDefaultCard(false));
      const text = getByTestId(CardTestID.TextID);
      expect(text).toHaveStyle({
        fontSize: 16,
      });
    });

    it('should be correct for the action buttons wrapper', () => {
      const { getByTestId } = render(getDefaultCard());
      const view = getByTestId(CardTestID.ButtonsContainerID);
      expect(view).toHaveStyle({
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 12,
        flex: 1,
      });
    });
  });

  describe('actions', () => {
    it('should call onDeletePress when the delete button is pressed', () => {
      const mockOnDelete = jest.fn();
      const { getByTestId } = render(
        <Card content="" isDone onDeletePress={mockOnDelete} onEditPress={() => {}} onDonePress={() => {}} />,
      );
      const button = getByTestId(CardTestID.DeleteButonID);
      fireEvent(button, 'press');
      expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });

    it('should call onEditPress when the edit button is pressed', () => {
      const mockOnEdit = jest.fn();
      const { getByTestId } = render(
        <Card content="" isDone onDeletePress={() => {}} onEditPress={mockOnEdit} onDonePress={() => {}} />,
      );
      const button = getByTestId(CardTestID.EditButonID);
      fireEvent(button, 'press');
      expect(mockOnEdit).toHaveBeenCalledTimes(1);
    });

    it('should call onDonePress when the done button is pressed and isDone = true', () => {
      const mockOnDone = jest.fn();
      const { getByTestId } = render(
        <Card content="" isDone onDeletePress={() => {}} onEditPress={() => {}} onDonePress={mockOnDone} />,
      );
      const button = getByTestId(CardTestID.DoneButonID);
      fireEvent(button, 'press');
      expect(mockOnDone).toHaveBeenCalledTimes(1);
    });

    it('should call onDonePress when the done button is pressed and isDone = false', () => {
      const mockOnDone = jest.fn();
      const { getByTestId } = render(
        <Card content="" isDone={false} onDeletePress={() => {}} onEditPress={() => {}} onDonePress={mockOnDone} />,
      );
      const button = getByTestId(CardTestID.DoneButonID);
      fireEvent(button, 'press');
      expect(mockOnDone).toHaveBeenCalledTimes(1);
    });
  });
});
