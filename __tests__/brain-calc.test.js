import { calculateResult } from '../src/games/brain-calc.js';

describe('calculateResult test', () => {
  test('given an invalid operand', () => {
    expect(calculateResult('t', 7, '-')).toBe(NaN); // toThrowError();
  });

  /*
  test('given an invalid operand', () => {
    expect(() => calculateResult('t', 7, '-')).toThrowError(); // toThrowError();
  });
  */

  test('given an unknown operator', () => {
    expect(() => calculateResult(10, 2, '/')).toThrowError('Unknown operator: \'/\'!');
  });

  test('adding two numbers', () => {
    expect(calculateResult(21, 3, '+')).toBe(24);
    expect(calculateResult(-3, -7, '+')).toBe(-10);
    expect(calculateResult(-5, 2, '+')).toBe(-3);
  });

  test('substracting two numbers', () => {
    expect(calculateResult(1, 5, '-')).toBe(-4);
    expect(calculateResult(-7, -2, '-')).toBe(-5);
    expect(calculateResult(23, 10, '-')).toBe(13);
  });

  test('multiplying two numbers', () => {
    expect(calculateResult(4, 5, '*')).toBe(20);
    expect(calculateResult(-1, -9, '*')).toBe(9);
    expect(calculateResult(0, 123, '*')).toBe(0);
  });
});
