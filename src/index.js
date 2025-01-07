import readlineSync from 'readline-sync';
import greeting from './cli.js';

const mainEngine = (getData, description) => {
    const userName = greeting();
    console.log(description);

    const roundsCount = 3;
    
    for (let i = 1; i <= roundsCount; i += 1) {
        const [question, rightAnswer] = getData();
    
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
    
        if (rightAnswer === answer) {
          console.log('Correct!');
        } else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          return;
        }
      }
    console.log(`Congratulations, ${userName}!`);
};

export default mainEngine;
