import { nanoid } from '@reduxjs/toolkit';
import { Todo } from '../model/Todo';

export const storeTodosMock: Todo[] = [
  {
    id: nanoid(),
    content:
      'Example todo content 1Example todo content 1Example todo content 1Example todo content 1Example todo content 1Example todo content 1Example todo content 1Example todo content 1Example todo content 1',
    isDeleted: false,
    isDone: false,
  },
  { id: nanoid(), content: 'Example todo content 2', isDeleted: false, isDone: false },
  { id: nanoid(), content: 'Example todo content 3', isDeleted: false, isDone: false },
  { id: nanoid(), content: 'Example todo content 4', isDeleted: false, isDone: false },
];
