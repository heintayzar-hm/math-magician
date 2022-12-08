import operate from '../operate';

describe('operate', () => {
  it('performs the correct operation', () => {
    expect(operate(5, 3, '+')).toBe('8');
    expect(operate(5, 3, '-')).toBe('2');
    expect(operate(5, 3, 'x')).toBe('15');
    expect(operate(6, 3, '÷')).toBe('2');
    expect(operate(5, 3, '%')).toBe('2');
  });

  it('throws an error for unknown operations', () => {
    expect(() => operate(5, 3, '?')).toThrowError("Unknown operation '?'");
  });

  it("returns 'Can't divide by 0.' when dividing by 0", () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
    expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
