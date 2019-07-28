import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('<Index />', () => {
  it('The content is rendered', () => {
    const { container } = render(<Index />);

    expect(container.querySelector('h1').textContent).toBe(
      "Your browser doesn't support navigator.connection 🙃"
    );
  });
});
