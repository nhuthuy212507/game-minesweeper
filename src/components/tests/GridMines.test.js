import React from 'react';
import { render } from '@testing-library/react';

import { Grid, Row, Cell } from '../GridMines';

describe('<GridMines />', () => {

  it('Grid should render an <div> tag', () => {
    const { container } = render(<Grid />);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('Row should render an <div> tag', () => {
    const { container } = render(<Row />);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('Cell should render an <div> tag', () => {
    const { container } = render(<Cell />);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('GridMines should match the snapshot', () => {
    const { container } = render(
      <Grid>
        <Row>
          <Cell />
        </Row>
      </Grid>
    );
    expect(container).toMatchSnapshot();
  });
});
