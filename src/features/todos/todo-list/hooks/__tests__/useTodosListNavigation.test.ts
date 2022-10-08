import { ScreenName } from '../../../../../common/config/ScreenName';
import { renderHook } from '@testing-library/react-native';
import { useTodosListNavigation } from '../useTodosListNavigation';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: (...args: any) => mockNavigate(...args),
    }),
  };
});

describe('useTodosList', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  describe('navigation', () => {
    it('navigates to add todo screen when handleAddTodoPress is called', () => {
      const { result } = renderHook(() => useTodosListNavigation());
      result.current.handleAddTodo();

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith(ScreenName.AddTodo);
    });

    it('navigates to edit todo screen when handleEditTodo is called', () => {
      const { result } = renderHook(() => useTodosListNavigation());
      result.current.handleEditTodo('the-id');

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith(ScreenName.EditTodo, { todoId: 'the-id' });
    });
  });
});
