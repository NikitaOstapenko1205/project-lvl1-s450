import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const checkOnEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const numbersToCheck = [15, 6, 7];
  const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

  for (let i = 0; i < numbersToCheck.length; i += 1) {
    const answer = readlineSync.question(`Question: ${numbersToCheck[i]}\nYour answer: `);

    if (isEven(numbersToCheck[i]) !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(answer)}".\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export { startGame, checkOnEven };
