import {
  readlineSync,
  initialGreeting,
  gameRounds,
  getRandomInt,
  getRandomOperator,
  getMathResult,
} from '../index';

const calculate = () => {
  const userName = initialGreeting('What is the result of the expression?\n');

  for (let i = 0; i < gameRounds; i += 1) {
    const randomNumber1 = getRandomInt(0, 100);
    const randomNumber2 = getRandomInt(0, 100);
    const randomOperator = getRandomOperator();
    const answer = readlineSync.question(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}\nYour answer: `);
    const mathResult = getMathResult(randomNumber1, randomNumber2, randomOperator);

    if (mathResult !== Number(answer)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${mathResult}".\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default calculate;
