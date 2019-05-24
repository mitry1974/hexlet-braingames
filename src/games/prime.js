#!/usr/bin/env node
import playGame, { baseGame, getOperand } from '../engine';

const primecheckingStep = 2;
const startPrimeChecking = 3;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getMaxValueForPrimeChecking = n => Math.round(Math.sqrt(n)) + 1;
const isDividedWithoutRemainder = (n, m) => n % m === 0;

const isPrime = (val) => {
  if (val < 2 || (val % 2 === 0 && val !== 2)) {
    return false;
  }

  const primeIter = (value, i, maxValue) => {
    if (i >= maxValue) {
      return true;
    }
  
    if (isDividedWithoutRemainder(value, i)) {
      return false;
    }
    return primeIter(value, i + primecheckingStep, maxValue);
  };

  return primeIter(val, startPrimeChecking, getMaxValueForPrimeChecking(val));
};

const getGameStepQuery = () => {
  const query = {};
  query.a = getOperand();
  query.toString = () => `${query.a}`;
  query.check = c => (isPrime(query.a) && c === 'yes') || (!isPrime(query.a) && c === 'no');
  query.getCorrectAnswer = () => (isPrime(query.a) ? 'yes' : 'no');
  return query;
};

export default () => playGame(baseGame(gameDescription, getGameStepQuery));
