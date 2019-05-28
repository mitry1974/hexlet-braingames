#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;

const askQuestions = (game) => {
  for (let i = 0; i < roundsCount; i += 1) {
    const question = game.getNextQuestion();
    console.log(`Question: ${question.text}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === question.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      return false;
    }
  }
  return true;
};

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(askQuestions(game) ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`);
};

export default playGame;
