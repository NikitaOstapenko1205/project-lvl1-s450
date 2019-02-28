import gameEngine from '../index';
import { getRandomInt, getRightAnswer } from '../utils';

const gameMessage = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => (number % 2 === 0);

const questionAnswerGenerator = () => {
  const question = getRandomInt(0, 100);
  const result = getRightAnswer(question)(isEven);
  const questionAnswer = [question, result];

  return questionAnswer;
};

export default () => gameEngine(gameMessage, questionAnswerGenerator);
