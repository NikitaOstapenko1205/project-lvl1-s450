import gameEngine from '..';
import getRandomInt from '../utils';

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const cycleEnd = number / 2;

  for (let i = 2; i <= cycleEnd; i += 1) {
    if ((number % i) === 0) {
      return false;
    }
  }

  return true;
};
const getRightAnswer = number => (isPrime(number) ? 'yes' : 'no');

const questionAndAnswerGenerator = () => {
  const question = getRandomInt(2, 3572);
  const answer = getRightAnswer(question);
  const questionAndAnswer = [question, answer];

  return questionAndAnswer;
};

export default () => gameEngine(gameMessage, questionAndAnswerGenerator);
