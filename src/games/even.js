import { readlineSync, initialGreeting, gameRounds, getRandomInt, getRightAnswer } from '../index';

const checkOnEven = () => {
  const userName = initialGreeting('Answer "yes" if number even otherwise answer "no".\n');

  for (let i = 0; i < gameRounds; i += 1) {
    const randomNumber = getRandomInt(0, 100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    const rightAnswer = getRightAnswer(randomNumber);

    if (rightAnswer !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export { checkOnEven };
