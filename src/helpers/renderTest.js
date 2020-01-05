import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import myReducer from '../redux/reducer';

function renderWithRedux(
  ui,
  { initialState, store = createStore(myReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

export default renderWithRedux;