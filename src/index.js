import readlineSync from 'readline-sync';

const initialGreeting = (gameMessage = '') => {
  console.log(`Welcome to the Brain Games!\n${gameMessage}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameRounds = 3;
const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random()*operators.length)];
};
const isEven = number => (number % 2 === 0);
const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');
const getMathResult = (number1, number2, operator) => {
  const operatorStr = String(operator);
  switch (operatorStr) {
    case '+':
      return number1 + number2;
    case '-': 
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return operatorStr;
  }
};

export { readlineSync, initialGreeting, gameRounds, getRandomInt, getRandomOperator, getRightAnswer, getMathResult, isEven };
