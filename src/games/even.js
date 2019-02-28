import {
  getRandomInt,
  gameEngine,
} from '../index';

const isEven = number => (number % 2 === 0);
const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');
const roundQuestion = () => getRandomInt(0, 100);

const questionAnswerGenerator = () => {
  const question = roundQuestion();
  const questionAnswer = [question, getRightAnswer(question)];

  return questionAnswer;
};

const checkOnEven = () => gameEngine('Answer "yes" if number even otherwise answer "no".\n', questionAnswerGenerator);

export default checkOnEven;
