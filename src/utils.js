
const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
const getRightAnswer = number => checkFunction => (checkFunction(number) ? 'yes' : 'no');

export { getRandomInt, getRightAnswer };
