import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const startGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 1; i <= roundsCount; i += 1) {
    const rundomNumber = getRandomNumber(0, 100);
    const rightAnswer = isEven(rundomNumber);

    console.log(`Question: ${rundomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGameEven;
