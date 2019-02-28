import gameEngine from '../index';
import { getRandomInt } from '../utils';

const gameMessage = 'What number is missing in the progression?';
const progressionLimit = 10;
const getMissedNumber = (firstNumber, progressionStep, progressionHole) => {
  let question = '';
  let counter = firstNumber;
  let result = 0;

  for (let i = 0; i < progressionLimit; i += 1) {
    if (i === progressionHole) {
      question += (i === 0) ? '..' : ' ..';
      result = counter;
    } else {
      question += (i === 0) ? `${String(counter)}` : ` ${String(counter)}`;
    }
    counter += progressionStep;
  }

  result = String(result);
  return [question, result];
};

const questionAnswerGenerator = () => {
  const firstNumber = getRandomInt(1, 50);
  const progressionStep = getRandomInt(1, 50);
  const progressionHole = getRandomInt(0, 9);
  const [question, result] = getMissedNumber(firstNumber, progressionStep, progressionHole);
  const questionAnswer = [question, result];

  return questionAnswer;
};

export default () => gameEngine(gameMessage, questionAnswerGenerator);
