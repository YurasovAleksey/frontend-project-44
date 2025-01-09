import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgressionArray = (firstItem, step, length) => {
  const progressionArray = [];

  for (let i = 0; i < length; i += 1) {
    progressionArray.push(firstItem + step * i);
  }
  return progressionArray;
};

const getData = () => {
  const firstItem = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = getProgressionArray(firstItem, step, length);
  const indexOfInvisNum = getRandomNumber(0, length - 1);

  const rightAnswer = `${progression[indexOfInvisNum]}`;
  progression[indexOfInvisNum] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const startGameProgression = () => runGame(getData, description);

export default startGameProgression;
