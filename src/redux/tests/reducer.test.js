import reducer from '../reducer';
import { setData, setDataSuccess, setDataError, setIsPlaying, resetGame } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      data: [],
      isSetting: false,
      error: false,
      isPlaying: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the setData action correctly', () => {
    const expectedResult = {
      ...state,
      isSetting: true,
    }

    expect(reducer(state, setData())).toEqual(expectedResult);
  });

  it('should handle the setDataSuccess action correctly', () => {
    const data = [{
      x: 0,
      y: 0,
      isMine: false,
      isOpen: false,
    }];
    const expectedResult = {
      ...state,
      isSetting: false,
      data: [...data],
    }

    expect(reducer(state, setDataSuccess(data))).toEqual(
      expectedResult,
    );
  });

  it('should handle the setDataError action correctly', () => {
    const error = "Error";
    const expectedResult = {
      isSetting: false,
      data: [],
      error: error
    }
    expect(reducer(state, setDataError(error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the setIsPlaying action correctly', () => {
    const expectedResult = {
      ...state,
      isPlaying: true,
    }

    expect(reducer(state, setIsPlaying())).toEqual(expectedResult);
  });

  it('should handle the resetGame action correctly', () => {
    const expectedResult = state;
    expect(reducer(state, resetGame())).toEqual(expectedResult);
  });
});
