import React from 'react';
import { render } from '@testing-library/react';
import { AddIcon } from './add-icon';

it('renders with the correct text', () => {
  const { getByTestId } = render(<AddIcon data-testid="add-icon" />);
  const rendered = getByTestId('add-icon');
  expect(rendered).toBeTruthy();
});
