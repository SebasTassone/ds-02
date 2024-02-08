import React from 'react';
import { render } from '@testing-library/react';
import { DoneCircleIcon } from './done-circle-icon';

it('renders with the correct text', () => {
  const { getByTestId } = render(<DoneCircleIcon data-testid="jelou-icon" />);
  const rendered = getByTestId('jelou-icon');
  expect(rendered).toBeTruthy();
});
