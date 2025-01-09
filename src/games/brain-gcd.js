import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  let firstNumber = num1;
  let secondNumber = num2;

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return firstNumber + secondNumber;
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
