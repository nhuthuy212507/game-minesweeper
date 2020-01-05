import * as types from './constants';

export const setData = () => ({
  type: types.SET_DATA
});

export const setDataSuccess = (data) => ({
  type: types.SET_DATA_SUCCESS,
  payload: data
});

export const setDataError = (err) => ({
  type: types.SET_DATA_ERROR,
  payload: err
});

export const setIsPlaying = () => ({
  type: types.SET_IS_PLAYING
})

export const resetGame = () => ({
  type: types.RESET_GAME
})