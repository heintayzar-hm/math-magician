import React from 'react';
import { render } from '@testing-library/react';
import CalculatorPage from '../calculator';

describe('CalculatorPage', () => {
  it('renders correctly', () => {
    // Arrange

    // Act
    const { container } = render(<CalculatorPage />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the Calculator component', () => {
    // Arrange

    // Act
    const { container } = render(<CalculatorPage />);
    const calculator = container.querySelector('.calculator');

    // Assert
    expect(calculator).not.toBeNull();
  });
});
