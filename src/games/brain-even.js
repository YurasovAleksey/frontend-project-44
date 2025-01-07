import mainEngine from '../index.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getData = () => {
  const question = getRandomNumber(0, 100);
  const rightAnswer = isEven(question);

  return [question, rightAnswer];
};

const startGame = () => mainEngine(getData, description);

export default startGame;
