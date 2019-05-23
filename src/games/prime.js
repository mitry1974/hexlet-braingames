#!/usr/bin/env node
import { game, getOperand } from './baseGame';

const roundsCount = 3;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isDividebyTwoButNotTwo = n => (n % 2 === 0 && n !== 2);
const isLessThanTwo = n => n < 2;
const getMaxValueForPrimeChecking = n => Math.round(Math.sqrt(n)) + 1;
const isDividedWithoutRemainder = (n, m) => n % m === 0;

const isPrime = (val) => {
  if (isLessThanTwo(val)) {
    return false;
  }

  if (isDividebyTwoButNotTwo(val)) {
    return false;
  }

  const max = getMaxValueForPrimeChecking();
  const iter = (i) => {
    if (i >= max) {
      return true;
    }

    if (isDividedWithoutRemainder(val, i)) {
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
