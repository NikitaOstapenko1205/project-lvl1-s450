import readlineSync from 'readline-sync';

const initialGreeting = (gameRule = '') => {
  console.log(`Welcome to the Brain Games!\n${gameRule}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const checkOnEven = () => {
  const userName = initialGreeting('Answer "yes" if number even otherwise answer "no".\n');
  const gameRounds = 3;

  for (let i = 0; i < gameRounds; i += 1) {
    const randomNumber = getRandomInt(0, 100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

    if (isEven(randomNumber) !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(answer)}".\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export { initialGreeting, checkOnEven };
