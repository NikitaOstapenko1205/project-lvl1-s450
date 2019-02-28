import gameEngine from '../index';
import getRandomInt from '../utils';

const isEven = number => (number % 2 === 0);
const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');
const roundQuestion = () => getRandomInt(0, 100);
const gameMessage = 'Answer "yes" if number even otherwise answer "no".';

const questionAnswerGenerator = () => {
  const question = roundQuestion();
  const result = getRightAnswer(question);
  const questionAnswer = [question, result];

  return questionAnswer;
};

export default () => gameEngine(gameMessage, questionAnswerGenerator);
