import { TodoFilter } from '../TodoFilter';

describe('TodoFilter', () => {
  it('should match snapshot', () => {
    expect(TodoFilter).toMatchInlineSnapshot(`
      Object {
        "All": "All",
        "Complete": "Complete",
        "Incomplete": "Incomplete",
      }
    `);
  });
});
