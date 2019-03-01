import gameEngine from '..';
import getRandomInt from '../utils';

const gameMessage = 'What is the result of the expression?';
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

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const questionAndAnswerGenerator = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const questionOperator = getRandomOperator();
  const question = `${number1} ${questionOperator} ${number2}`;
  const answer = String(getMathResult(number1, number2, questionOperator));
  const questionAndAnswer = [question, answer];

  return questionAndAnswer;
};

export default () => gameEngine(gameMessage, questionAndAnswerGenerator);
