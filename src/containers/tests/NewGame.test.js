import React from 'react';
import NewGame from '../NewGame';
import renderWithRedux from '../../helpers/renderTest';

describe('<NewGameContainer />', () => {

  const playGameFn = jest.fn();

  it('should render and match the snapshot', () => {
    const { container } = renderWithRedux(
      <NewGame onPlayGame={playGameFn} isStarting={false} />
    );
    expect(container).toMatchSnapshot();
  });

  it ('should render text PleaseWait when change isSetting', () => {
    const { getByTestId } = renderWithRedux(<NewGame onPlayGame={playGameFn} />, {
      initialState: {
        isSetting: true,
      },
    });
    expect(getByTestId("button-play-game")).toHaveTextContent("Please wait");
  });
});