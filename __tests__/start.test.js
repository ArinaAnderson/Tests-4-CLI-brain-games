import start from '../start.js';

test('to start testing', () => {
  expect(start(5)).toBe(10);
  expect(start(0)).toBe(0);
});
