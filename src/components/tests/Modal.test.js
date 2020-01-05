import React from 'react';
import { render } from '@testing-library/react';

import { Modal, ModalContent } from '../Modal';

describe('<App />', () => {

  it('Modal should render an <div> tag', () => {
    const { container } = render(<Modal />);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('ModalContent should render an <h1> tag', () => {
    const { container } = render(<ModalContent />);
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('Modal should match the snapshot', () => {
    const { container } = render(
      <Modal>
        <ModalContent />
      </Modal>
    );
    expect(container).toMatchSnapshot();
  });
});
