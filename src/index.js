import readlineSync from 'readline-sync';

const roundsCount = 3;

const setGame = (
  gameTask,
  setGameParams,
  inputIO = readlineSync.question,
  outputIO = console.log,
) => {
  outputIO('Welcome to the Brain Games!');
  const gamerName = inputIO('May I have your name? ');
  outputIO(`Hello, ${gamerName}`);

  outputIO(gameTask);
  for (let i = 0; i < roundsCount; i += 1) {
    const { questionVal, correctVal } = setGameParams();
    outputIO(`Question: ${questionVal}`);
    const respond = inputIO('Your answer: ');
    if (correctVal === respond) {
      outputIO('Correct!');
    } else {
      outputIO(`'${respond}' is wrong answer ;(. Correct answer was '${correctVal}'.\nLet's try again, ${gamerName}!`);
      return;
    }
  }
  outputIO(`Congratulations, ${gamerName}!`);
};

export default setGame;
