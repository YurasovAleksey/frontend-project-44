import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getData = () => {
  const question = getRandomNumber(0, 100);
  const rightAnswer = isEven(question);

  return [question, rightAnswer];
};

const startGameEven = () => runGame(getData, description);

export default startGameEven;
