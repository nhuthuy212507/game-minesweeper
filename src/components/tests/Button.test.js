import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('<Button />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(<Button />);
    expect(container.querySelector('button')).toBeTruthy();
  });

  it('Button should match the snapshot', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
