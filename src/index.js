import readlineSync from 'readline-sync';

const initialGreeting = (gameMessage = '') => {
  console.log(`Welcome to the Brain Games!\n${gameMessage}\n`);
  const userName = readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameRounds = 3;

const gameEngine = (gameMessage, getQuetionAndAnswer) => {
  const userName = initialGreeting(gameMessage);

  for (let i = 0; i < gameRounds; i += 1) {
    const [question, rightAnswer] = getQuetionAndAnswer();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (rightAnswer !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
