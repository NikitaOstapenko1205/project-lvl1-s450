import gameEngine from '..';
import getRandomInt from '../utils';

const gameMessage = 'What number is missing in the progression?';
const progressionLimit = 10;
const getQuestionAndAnswer = (firstNumber, progressionStep, progressionHole) => {
  let question = '';
  let answer = 0;

  for (let i = 0; i < progressionLimit; i += 1) {
    const currentNumber = firstNumber + progressionStep * i;
    if (i === progressionHole) {
      question += ' ..';
      answer = currentNumber;
    } else {
      question += ` ${String(currentNumber)}`;
    }
  }

  question = question.trim();
  answer = String(answer);
  return [question, answer];
};

const questionAndAnswerGenerator = () => {
  const firstNumber = getRandomInt(1, 50);
  const progressionStep = getRandomInt(1, 50);
  const progressionHole = getRandomInt(0, progressionLimit - 1);
  const [question, answer] = getQuestionAndAnswer(firstNumber, progressionStep, progressionHole);
  const questionAndAnswer = [question, answer];

  return questionAndAnswer;
};

export default () => gameEngine(gameMessage, questionAndAnswerGenerator);
