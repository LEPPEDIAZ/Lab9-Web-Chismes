import * as types from '../types/users';

export const addUser = (id, Titulo, lastName, email, chisme) => ({
  type: types.USER_ADDED,
  payload: {
    id,
    Titulo,
    lastName,
    email,
    chisme,
  },
});

export const removeUser = id => ({
  type: types.USER_REMOVED,
  payload: { id },
});

export const confirmUser = id => ({
  type: types.USER_CONFIRMED,
  payload: { id },
});
