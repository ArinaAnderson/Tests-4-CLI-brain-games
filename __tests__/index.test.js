import jest from 'jest-mock';
import { setGame } from '../src/index.js';

const prepareYesGameData = () => ({
  questionVal: 'yes',
  correctVal: 'yes',
});

const yesGameTask = 'Always say yes';

describe('game engine', () => {
  test('using IO correctly', () => {
    const mockInputIO = jest.fn();
    const mockOutputIO = jest.fn();
    mockInputIO.mockReturnValueOnce('Spiral');
    
    setGame(yesGameTask, prepareYesGameData, mockInputIO, mockOutputIO);
    expect(mockOutputIO.mock.calls[1][0]).toBe('Hello, Spiral');
    // expect(mockInputIO).toHaveBeenCalledWith();
  });
});
