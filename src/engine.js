#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.getGameDescription());
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  let bres = true;
  for (let i = 0; i < roundsCount; i += 1) {
    const question = game.getNextQuestion();
    console.log(`Question: ${question.getDescription()}`);
    const answer = readlineSync.question('Your answer: ');
    bres = bres && question.checkAnswer(answer);

    if (bres) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question.getCorrectAnswer()}'.`);
      break;
    }
  }
  console.log(bres ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`);
};

export default playGame;
