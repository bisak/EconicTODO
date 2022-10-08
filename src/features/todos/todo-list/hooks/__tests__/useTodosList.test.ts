import { useTodosList } from '../useTodosList';
import { appRenderHook, testStore } from '../../../../../common/utils/testUtils';
import {
  addTodoAction,
  completeTodoAction,
  deleteTodoAction,
  editTodoAction,
  resetReducer,
} from '../../../slice/todosActions';
import { act } from 'react-test-renderer';
import { Alert } from 'react-native';

describe('useTodosList', () => {
  beforeEach(() => {
    testStore.dispatch(resetReducer());

    testStore.dispatch(addTodoAction({ content: 'testTodo', id: '1' }));
    testStore.dispatch(addTodoAction({ content: 'testTodo-2', id: '2' }));
    testStore.dispatch(addTodoAction({ content: 'testTodo-3', id: '3' }));
    testStore.dispatch(deleteTodoAction({ id: '3' }));
    testStore.dispatch(completeTodoAction({ id: '2', isDone: true }));
    testStore.dispatch(editTodoAction({ id: '1', content: 'testTodo-1' }));
  });

  describe('selectors', () => {
    it('should return todoItems from store', () => {
      const { result } = appRenderHook(() => useTodosList());

      expect(result.current.todoItems).toHaveLength(2);
      expect(result.current.todoItems[0]).toMatchObject({ content: 'testTodo-1' });
      expect(result.current.todoItems[1]).toMatchObject({ content: 'testTodo-2' });
    });

    it('should return empty array when the store is empty', () => {
      testStore.dispatch(resetReducer());
      const { result } = appRenderHook(() => useTodosList());

      expect(result.current.todoItems).toEqual([]);
    });

    it('should return correct counts', () => {
      const { result } = appRenderHook(() => useTodosList());

      expect(result.current.allTodosCount).toEqual(2);
      expect(result.current.completedTodosCount).toEqual(1);
    });

    it('should return correct counts when store is empty', () => {
      testStore.dispatch(resetReducer());
      const { result } = appRenderHook(() => useTodosList());

      expect(result.current.allTodosCount).toEqual(0);
      expect(result.current.completedTodosCount).toEqual(0);
    });
  });

  describe('actions', () => {
    // Mock react-native's Alert to regardless accept the deletion confirmation
    jest
      .spyOn(Alert, 'alert')
      //@ts-ignore
      .mockImplementation((title, message, callbackOrButtons) => callbackOrButtons[1].onPress());

    it('completes a todo when handleCompleteTodo is called with true', async () => {
      const { result } = appRenderHook(() => useTodosList());
      await act(() => {
        result.current.handleCompleteTodo('1', true);
      });
      expect(result.current.todoItems[0].isDone).toBeTruthy();
    });

    it('un-completes a todo when handleCompleteTodo is called with false', async () => {
      const { result } = appRenderHook(() => useTodosList());
      await act(() => {
        result.current.handleCompleteTodo('2', false);
      });
      expect(result.current.todoItems[1].isDone).toBeFalsy();
    });

    it('deletes a todo when handleDeleteTodo is called', async () => {
      const { result } = appRenderHook(() => useTodosList());
      await act(() => {
        result.current.handleDeleteTodo('2');
      });
      expect(result.current.todoItems).toHaveLength(1);
    });
  });
});
