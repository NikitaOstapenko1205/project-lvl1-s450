import {
  getRandomInt,
  gameEngine,
} from '../index';

const getGcdResult = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return getGcdResult(number2, number1 % number2);
};

const questionAnswerGenerator = () => {
  const question1 = getRandomInt(0, 100);
  const question2 = getRandomInt(0, 100);
  const questionAnswer = [`${question1} ${question2}`, String(getGcdResult(question1, question2))];

  return questionAnswer;
};

const gcd = () => gameEngine('Find the greatest common divisor of given numbers.\n', questionAnswerGenerator);

export default gcd;
