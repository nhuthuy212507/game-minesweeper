import React from 'react';
import App from '../App';
import NewGame from '../NewGame';
import renderWithRedux from '../../helpers/renderTest';

describe('<AppContainer />', () => {
  it('should render and match the snapshot', () => {
    const setDataFn = jest.fn();
    const setDataSuccessFn = jest.fn();
    const setDataErrorFn = jest.fn();
    const setIsPlayingFn = jest.fn();
    const { container } = renderWithRedux(
      <App 
        onSetData={setDataFn}
        onSetDataSuccess={setDataSuccessFn}
        onSetDataError={setDataErrorFn}
        onSetIsPlaying={setIsPlayingFn}
        isPlaying={false}
      >
        <NewGame />
      </App>
    );
    expect(container).toMatchSnapshot();
  });

  it ('should render <GirdMines /> when change isPlaying', () => {
    const { getByTestId } = renderWithRedux(<App />, {
      initialState: {
        isPlaying: true,
        data: [],
        isSetting: false,
      },
    });
    expect(getByTestId('grid-mines')).toBeInTheDocument();
  });
});