#!/usr/bin/env node

import { game, getOperand, getRandomInt } from './baseGame';

const roundsCount = 3;

const gameDescription = 'What is the result of the expression?';

const getQuery = () => {
  const query = {

  };

  query.a = getOperand();
  query.b = getOperand();

  switch (getRandomInt(1, 3)) {
    case 1:
      query.calc = () => query.a - query.b;
      query.toString = () => `${query.a} - ${query.b} = `;
      break;
    case 2:
      query.calc = () => query.a + query.b;
      query.toString = () => `${query.a} + ${query.b} = `;
      break;
    case 3:
      query.calc = () => query.a * query.b;
      query.toString = () => `${query.a} + ${query.b} = `;
      break;
    default:
      break;
  }
  query.check = c => query.calc() === parseInt(c, 10);
  query.getCorrectAnswer = () => query.calc();

  return query;
};

export default game(gameDescription, roundsCount, getQuery);
