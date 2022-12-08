import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomePage';

test('HomePage component renders welcome message', () => {
  const { getByText } = render(<HomePage />);

  // Assert that the welcome message is rendered with the correct text
  const welcomeMessage = getByText('Welcome To Our Application, I am Hein Tay Zar');
  expect(welcomeMessage).toBeDefined();
});
