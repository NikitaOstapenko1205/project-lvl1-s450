import gameEngine from '..';
import getRandomInt from '../utils';

const gameMessage = 'What number is missing in the progression?';
const progressionLimit = 10;
const getQuestionAndAnswer = (firstNumber, progressionStep, progressionHole) => {
  let question = '';

  for (let i = 0; i < progressionLimit; i += 1) {
    const currentNumber = firstNumber + progressionStep * i;
    if (i === progressionHole) {
      question += ' ..';
    } else {
      question += ` ${String(currentNumber)}`;
    }
  }

  return question.trim();
};

const questionAndAnswerGenerator = () => {
  const firstNumber = getRandomInt(1, 50);
  const progressionStep = getRandomInt(1, 50);
  const progressionHole = getRandomInt(0, progressionLimit - 1);
  const question = getQuestionAndAnswer(firstNumber, progressionStep, progressionHole);
  const answer = String(firstNumber + progressionStep * progressionHole);
  const questionAndAnswer = [question, answer];

  return questionAndAnswer;
};

export default () => gameEngine(gameMessage, questionAndAnswerGenerator);
