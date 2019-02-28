import gameEngine from '../index';
import { getRandomInt, getRightAnswer } from '../utils';

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  const cycleEnd = number / 2;

  for (let i = 2; i <= cycleEnd; i += 1) {
    if ((number % i) === 0) {
      return false;
    }
  }

  return true;
};

const questionAnswerGenerator = () => {
  const question = getRandomInt(2, 3572);
  const result = getRightAnswer(question)(isPrime);
  const questionAnswer = [question, result];

  return questionAnswer;
};

export default () => gameEngine(gameMessage, questionAnswerGenerator);
