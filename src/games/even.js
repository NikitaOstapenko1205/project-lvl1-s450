import gameEngine from '../index';
import getRandomInt from '../utils';

const isEven = number => (number % 2 === 0);
const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');
const gameMessage = 'Answer "yes" if number even otherwise answer "no".';

const questionAnswerGenerator = () => {
  const question = getRandomInt(0, 100);
  const result = getRightAnswer(question);
  const questionAnswer = [question, result];

  return questionAnswer;
};

export default () => gameEngine(gameMessage, questionAnswerGenerator);
