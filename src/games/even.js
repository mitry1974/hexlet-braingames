#!/usr/bin/env node
import { game, getOperand } from './baseGame';

const roundsCount = 3;
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getQuery = () => {
  const query = {};
  query.a = getOperand();
  query.toString = () => `${query.a}`;
  query.isEven = () => query.a % 2 === 0;
  query.check = c => (query.isEven() && c === 'yes') || (!query.isEven() && c === 'no');
  query.getCorrectAnswer = () => (query.isEven() ? 'yes' : 'no');
  return query;
};

export default game(gameDescription, roundsCount, getQuery);
