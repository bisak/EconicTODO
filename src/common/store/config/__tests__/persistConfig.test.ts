import { todosReducerPersistConfig } from '../persistConfig';

describe('persistConfig', () => {
  it('todosReducerPersistConfig should not have keyPrefix', () => {
    expect(todosReducerPersistConfig).toMatchObject({ keyPrefix: '' });
  });
});
