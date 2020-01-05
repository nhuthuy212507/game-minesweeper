
import * as types from './constants';

const initialState = {
  data: [],
  isSetting: false,
  error: false,
  isPlaying: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        isSetting: true,
      };
    case types.SET_DATA_SUCCESS:
      return {
        ...state,
        isSetting: false,
        data: [...action.payload],
      }
    case types.SET_DATA_ERROR:
      return {
        isSetting: false,
        data: [],
        error: action.payload
      }
    case types.SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: true
      }
    case types.RESET_GAME:
      return initialState;
    default:
      return state;
  }
}

export default myReducer;