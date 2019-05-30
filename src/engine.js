#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (description, nextRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  for (let i = 0; i <= roundsCount; i += 1) {
    if (i === roundsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const round = nextRound();
    console.log(`Question: ${round.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === round.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${round.answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
};

export default playGame;
