import { SET_DATA, SET_DATA_SUCCESS, SET_DATA_ERROR, SET_IS_PLAYING, RESET_GAME } from '../constants';

import { setData, setDataSuccess, setDataError, setIsPlaying, resetGame } from '../actions';

describe('Actions', () => {
  it('setData should return the correct type', () => {
    const expectedResult = {
      type: SET_DATA,
    };
    expect(setData()).toEqual(expectedResult);
  });

  it('setDataSuccess should return the correct type and the object mines', () => {
    const data = [{
      x: 0,
      y: 0,
      isMine: false,
      isOpen: false,
    }];
    const expectedResult = {
      type: SET_DATA_SUCCESS,
      payload: data,
    };

    expect(setDataSuccess(data)).toEqual(expectedResult);
  });

  it('setDataError should return the correct type and the error', () => {
    const error = 'Error';
    const expectedResult = {
      type: SET_DATA_ERROR,
      payload: error,
    };

    expect(setDataError(error)).toEqual(expectedResult);
  });

  it('setIsPlaying should return the correct type', () => {
    const expectedResult = {
      type: SET_IS_PLAYING,
    };
    expect(setIsPlaying()).toEqual(expectedResult);
  });

  it('resetGame should return the correct type', () => {
    const expectedResult = {
      type: RESET_GAME,
    };
    expect(resetGame()).toEqual(expectedResult);
  });
});
