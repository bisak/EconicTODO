import { act } from 'react-test-renderer';
import { appRenderHook, testStore } from '../../../../../common/utils/testUtils';
import { resetReducer } from '../../../slice/todosActions';
import { selectAllTodos } from '../../../slice/todosSelectors';
import { useAddTodo } from '../useAddTodo';

const mockCanGoBack = jest.fn().mockReturnValue(true);
const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    goBack: () => mockGoBack(),
    canGoBack: () => mockCanGoBack(),
  }),
}));

describe('useAddTodo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    testStore.dispatch(resetReducer());
  });

  it('should add a todo to store when handleAddTodo is called', () => {
    const { result } = appRenderHook(() => useAddTodo());
    result.current.handleAddTodo('newTodo');
    const newTodoFromStore = selectAllTodos(testStore.getState()).some(todo => todo.content === 'newTodo');
    expect(newTodoFromStore).toBeTruthy();
  });

  it('should call goBack navigation if canGoBack = true', async () => {
    const { result } = appRenderHook(() => useAddTodo());
    await act(() => {
      result.current.handleAddTodo('newContent');
    });
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it('should not call goBack navigation if canGoBack = false', async () => {
    mockCanGoBack.mockReturnValueOnce(false);
    const { result } = appRenderHook(() => useAddTodo());
    await act(() => {
      result.current.handleAddTodo('newContent');
    });
    expect(mockGoBack).toHaveBeenCalledTimes(0);
  });
});
