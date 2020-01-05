import React from 'react';
import { render } from '@testing-library/react';

import { Wrapper, Title } from '../App';

describe('<App />', () => {

  it('Wrapper should render an <div> tag', () => {
    const { container } = render(<Wrapper />);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('Title should render an <h1> tag', () => {
    const { container } = render(<Title />);
    expect(container.querySelector('h1')).toBeTruthy();
  });

  it('App should match the snapshot', () => {
    const { container } = render(
      <Wrapper>
        <Title>Mini MineSweeper</Title>
      </Wrapper>
    );
    expect(container).toMatchSnapshot();
  });
});
