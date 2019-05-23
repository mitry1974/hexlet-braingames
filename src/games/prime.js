#!/usr/bin/env node
import { game, getOperand } from './baseGame';

const roundsCount = 3;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (val) => {
  if ((val < 2) || (val % 2 === 0 && val !== 2)) {
    return false;
  }

  const max = Math.round(Math.sqrt(val)) + 1;
  const iter = (i) => {
    if (i >= max) {
      return true;
    }

    if (val % i === 0) {
      return false;
    }
    return iter(i + 2);
  };


  return iter(3);
};

const getQuery = () => {
  const query = {};
  query.a = getOperand();
  query.toString = () => `${query.a}`;
  query.check = c => (isPrime(query.a) && c === 'yes') || (!isPrime(query.a) && c === 'no');
  query.getCorrectAnswer = () => (isPrime(query.a) ? 'yes' : 'no');
  return query;
};

export default game(gameDescription, roundsCount, getQuery);
