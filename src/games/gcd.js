import gameEngine from '../index';
import { getRandomInt } from '../utils';

const gameMessage = 'Find the greatest common divisor of given numbers.';
const getGcdResult = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return getGcdResult(number2, number1 % number2);
};

const questionAnswerGenerator = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const question = `${number1} ${number2}`;
  const result = String(getGcdResult(number1, number2));
  const questionAnswer = [question, result];

  return questionAnswer;
};

export default () => gameEngine(gameMessage, questionAnswerGenerator);
