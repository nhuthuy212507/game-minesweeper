import React from 'react';
import { render } from '@testing-library/react';

import ButtonGroup from '../ButtonGroup';

describe('<ButtonGroup />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<ButtonGroup />);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const { container } = render(<ButtonGroup />);
    expect(container).toMatchSnapshot();
  });
});
