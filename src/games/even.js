import gameEngine from '..';
import getRandomInt from '../utils';

const gameMessage = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => (number % 2 === 0);
const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');

const questionAndAnswerGenerator = () => {
  const question = getRandomInt(0, 100);
  const answer = getRightAnswer(question);
  const questionAndAnswer = [question, answer];

  return questionAndAnswer;
};

export default () => gameEngine(gameMessage, questionAndAnswerGenerator);
