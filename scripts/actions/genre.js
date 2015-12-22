import * as types from '../constants/ActionTypes';

export function deleteGenre(genre) {
  return {
      type: types.DELETE_GENRE,
      genre: genre,
  };
}
