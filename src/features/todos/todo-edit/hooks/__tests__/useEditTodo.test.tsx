import { act } from 'react-test-renderer';
import { appRenderHook, testStore } from '../../../../../common/utils/testUtils';
import { addTodoAction, resetReducer } from '../../../slice/todosActions';
import { useEditTodo } from '../useEditTodo';

const mockCanGoBack = jest.fn().mockReturnValue(true);
const mockGoBack = jest.fn();
const mockTodoIdParam = jest.fn().mockReturnValue('1');
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    goBack: () => mockGoBack(),
    canGoBack: () => mockCanGoBack(),
  }),
  useRoute: () => ({
    params: {
      todoId: mockTodoIdParam(),
    },
  }),
}));

describe('useEditTodo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    testStore.dispatch(resetReducer());

    testStore.dispatch(addTodoAction({ content: 'testTodo', id: '1' }));
    testStore.dispatch(addTodoAction({ content: 'testTodo-2', id: '2' }));
  });

  it('should return the correct todo from navigation params', () => {
    const { result } = appRenderHook(() => useEditTodo());
    expect(result.current.todoItem?.content).toEqual('testTodo');
  });

  it('should return nothing if todo id does not exist in store', () => {
    mockTodoIdParam.mockReturnValueOnce(3);
    const { result } = appRenderHook(() => useEditTodo());
    expect(result.current.todoItem).toEqual(undefined);
  });

  it('should edit the todo handleEditTodo is called', async () => {
    const { result } = appRenderHook(() => useEditTodo());
    await act(() => {
      result.current.handleEditTodo('newContent');
    });
    expect(result.current.todoItem?.content).toEqual('newContent');
  });

  it('should not crash if todo with wrong id is attempted to be edited', async () => {
    mockTodoIdParam.mockReturnValueOnce(3);
    const { result } = appRenderHook(() => useEditTodo());
    await act(() => {
      result.current.handleEditTodo('newContent');
    });
    expect(result.current.todoItem).toEqual(undefined);
  });

  it('should call goBack navigation if canGoBack = true', async () => {
    const { result } = appRenderHook(() => useEditTodo());
    await act(() => {
      result.current.handleEditTodo('newContent');
    });
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it('should not call goBack navigation if canGoBack = false', async () => {
    mockCanGoBack.mockReturnValueOnce(false);
    const { result } = appRenderHook(() => useEditTodo());
    await act(() => {
      result.current.handleEditTodo('newContent');
    });
    expect(mockGoBack).toHaveBeenCalledTimes(0);
  });
});
