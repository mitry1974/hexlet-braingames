#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getOperand = () => getRandomInt(1, 100);

const baseGame = (description, query) => (
  {
    getGameDescription() {
      return description;
    },
    getNextQuery() {
      return query();
    },
  });

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.getGameDescription());
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  let bres = true;
  for (let i = 0; i < roundsCount; i += 1) {
    const query = game.getNextQuery();
    console.log(`Question: ${query.toString()}`);
    const answer = readlineSync.question('Your answer: ');
    bres = bres && query.check(answer);

    if (bres) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${query.getCorrectAnswer()}'.`);
      break;
    }
  }
  console.log(bres ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`);
};

export { baseGame, getRandomInt, getOperand };
export default playGame;
