import {
  getRandomInt,
  gameEngine,
} from '../index';

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
  const question1 = getRandomInt(0, 100);
  const question2 = getRandomInt(0, 100);
  const questionOperator = getRandomOperator();
  const questionAnswer = [`${question1} ${questionOperator} ${question2}`, String(getMathResult(question1, question2, questionOperator))];

  return questionAnswer;
};

const calculate = () => gameEngine('What is the result of the expression?\n', questionAnswerGenerator);

export default calculate;
