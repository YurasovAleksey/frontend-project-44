import mainEngine from '../index.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Wrong operator!');
  }
};

const getData = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(0, 50);
  const number2 = getRandomNumber(0, 50);
  const randomOperator = operators[getRandomNumber(0, 2)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const rightAnswer = String(calculate(number1, number2, randomOperator));

  return [question, rightAnswer];
};

const startGameCalc = () => mainEngine(getData, description);

export default startGameCalc;
