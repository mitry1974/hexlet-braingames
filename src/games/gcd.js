#!/usr/bin/env node
import playGame, { baseGame, getOperand } from '../engine';

const roundsCount = 3;
const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  if (a === 0) {
    return b;
  }

  return findGCD(b % a, a);
};

const getQuery = () => {
  const query = {};
  query.a = getOperand();
  query.b = getOperand();
  query.toString = () => `${query.a} ${query.b}`;
  query.check = c => parseInt(c, 10) === findGCD(query.a, query.b);
  query.getCorrectAnswer = () => findGCD(query.a, query.b);
  return query;
};

export default () => playGame(baseGame(gameDescription, roundsCount, getQuery));
