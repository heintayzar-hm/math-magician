import calculate from '../calculate';

describe('calculate', () => {
  it('returns the initial state when given the "AC" button', () => {
    // Arrange
    const initialState = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = 'AC';

    // Act
    const result = calculate(initialState, buttonName);

    // Assert
    expect(result).toEqual(initialState);
  });

  it('updates the next value when given a number button', () => {
    // Arrange
    const initialState = {
      total: null,
      next: '5',
      operation: null,
    };
    const buttonName = '3';

    // Act
    const result = calculate(initialState, buttonName);

    // Assert
    expect(result.next).toBe('53');
    expect(result.operation).toBe(undefined);
    expect(result.total).toBe(null);
  });

  it('updates the operation and clears the next value when given an operation button', () => {
    // Arrange
    const initialState = {
      total: '5',
      next: '3',
      operation: null,
    };
    const buttonName = '+';

    // Act
    const result = calculate(initialState, buttonName);

    // Assert
    expect(result.next).toBe(null);
    expect(result.operation).toBe('+');
    expect(result.total).toBe('3');
  });

  it('performs the correct operation when given the "=" button', () => {
    // Arrange
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const buttonName = '=';

    // Act
    const result = calculate(initialState, buttonName);

    // Assert
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  it('do the operation when given an unknown button', () => {
    // Arrange
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const buttonName = '?';

    // Act
    const result = calculate(initialState, buttonName);

    // Assert
    expect(result).toEqual({ total: '8', next: null, operation: '?' });
  });
});
