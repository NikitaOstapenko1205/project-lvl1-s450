import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const startGame = () => console.log(`Hello, ${readlineSync.question('May I have your name? ')}!`);

export default startGame;
