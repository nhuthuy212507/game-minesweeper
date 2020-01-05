import React from 'react';
import { render } from '@testing-library/react';

import { Content, PlayButton } from '../NewGame';

describe('<NewGame />', () => {

  it('Content should render an <div> tag', () => {
    const { container } = render(<Content />);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('PlayButton should render an <h1> tag', () => {
    const { container } = render(<PlayButton />);
    expect(container.querySelector('button')).toBeTruthy();
  });

  it('NewGame should match the snapshot', () => {
    const { container } = render(
      <Content>
        <PlayButton>Play Game</PlayButton>
      </Content>
    );
    expect(container).toMatchSnapshot();
  });
});
