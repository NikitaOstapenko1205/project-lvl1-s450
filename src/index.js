import readlineSync from 'readline-sync';

const initialGreeting = (gameMessage = '') => {
  console.log(`Welcome to the Brain Games!\n${gameMessage}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameRounds = 3;
const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

const gameEngine = (gameMessage, getQuetionAndAnswer) => {
  const userName = initialGreeting(gameMessage);

  for (let i = 0; i < gameRounds; i += 1) {
    const questionAnswerPair = getQuetionAndAnswer();
    const question = questionAnswerPair[0];
    const rightAnswer = questionAnswerPair[1];
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

export {
  getRandomInt,
  gameEngine,
};
