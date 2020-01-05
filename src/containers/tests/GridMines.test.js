import React from 'react';
import GridMines from '../GridMines';
import renderWithRedux from '../../helpers/renderTest';

describe('<GridMinesContainer />', () => {

  it('should render and match the snapshot', () => {
    const { container } = renderWithRedux(
      <GridMines 
        dataGrid={[]}
        onSetDataSuccess={jest.fn()}
        onResetGame={jest.fn()}
        onPlayGame={jest.fn()}
        isSetting={false}
        mines={10}
      />
    );
    expect(container).toMatchSnapshot();
  });
});