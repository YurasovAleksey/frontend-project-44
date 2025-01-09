import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const getData = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(getGreatestDivisor(number1, number2));

  return [question, rightAnswer];
};

const startGameGcd = () => runGame(getData, description);

export default startGameGcd;
