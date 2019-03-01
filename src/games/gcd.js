import gameEngine from '..';
import getRandomInt from '../utils';

const gameMessage = 'Find the greatest common divisor of given numbers.';
const getGcdResult = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return getGcdResult(number2, number1 % number2);
};

const questionAndAnswerGenerator = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGcdResult(number1, number2));
  const questionAndAnswer = [question, answer];

  return questionAndAnswer;
};

export default () => gameEngine(gameMessage, questionAndAnswerGenerator);
