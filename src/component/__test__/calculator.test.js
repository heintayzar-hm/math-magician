import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Calculator from '../calculator';

describe('Calculator', () => {
  it('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(<Calculator />);
    // Assert
    expect(container).toMatchSnapshot();
  });

  it('updates the display when a number button is clicked', () => {
    // Arrange
    const { getByTestId, queryByTestId } = render(<Calculator />);
    const numberButton = getByTestId('5');
    // Act
    fireEvent.click(numberButton, { target: { innerText: '5' } });
    // Assert
    expect(queryByTestId('output')).toHaveTextContent('5');
  });
  it('updates the display when an operation button is clicked', () => {
    // Arrange
    const { getByTestId, queryByTestId } = render(<Calculator />);
    const numberButton = getByTestId('5');
    const operationButton = getByTestId('+');
    const equalButton = getByTestId('=');
    // Act
    fireEvent.click(numberButton, { target: { innerText: '5' } });
    fireEvent.click(operationButton, { target: { innerText: '+' } });
    fireEvent.click(numberButton, { target: { innerText: '5' } });
    fireEvent.click(equalButton, { target: { innerText: '=' } });
    // Assert
    expect(queryByTestId('output')).toHaveTextContent('10');
  });
});
