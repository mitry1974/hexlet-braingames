#!/usr/bin/env node
import playGame from '../engine';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = n => n % 2 === 0;
const getNextRound = () => {
  const a = getRandomInt(1, 10);
  return {
    question: a,
    answer: (isEven(a) ? 'yes' : 'no'),
  };
};

export default () => playGame(gameDescription, getNextRound);
