import gameEngine from '../index';
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

const questionAnswerGenerator = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const questionOperator = getRandomOperator();
  const question = `${number1} ${questionOperator} ${number2}`;
  const result = String(getMathResult(number1, number2, questionOperator));
  const questionAnswer = [question, result];

  return questionAnswer;
};

export default () => gameEngine(gameMessage, questionAnswerGenerator);
