import React from 'react';
import { render } from '@testing-library/react';
import QuotePage from '../QuotePage';

describe('QuotePage', () => {
  it('renders correctly', () => {
    // Arrange

    // Act
    const { container } = render(<QuotePage />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the correct quote text', () => {
    // Arrange

    // Act
    const { container } = render(<QuotePage />);
    const quote = container.querySelector('h2');

    // Assert
    expect(quote.textContent).toBe('Mathematics is not about calculation, equations, computations, or algorithms, It is about understanding --- Willian Paul Thurston');
  });
});
