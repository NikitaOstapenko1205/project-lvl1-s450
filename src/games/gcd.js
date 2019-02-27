import {
  readlineSync,
  initialGreeting,
  gameRounds,
  getRandomInt,
  getGcdResult,
} from '../index';

const gcd = () => {
  const userName = initialGreeting('Find the greatest common divisor of given numbers.\n');

  for (let i = 0; i < gameRounds; i += 1) {
    const randomNumber1 = getRandomInt(0, 100);
    const randomNumber2 = getRandomInt(0, 100);
    const answer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);
    const gcdResult = getGcdResult(randomNumber1, randomNumber2);

    if (gcdResult !== Number(answer)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gcdResult}".\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gcd;
