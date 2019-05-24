#!/usr/bin/env node

import playGame, { baseGame, getOperand, getRandomInt } from '../engine';

const gameDescription = 'What is the result of the expression?';

const getCalculationResult = (operation) => {
  let f;
  switch (operation) {
    case 1:
      f = (a, b) => a - b;
      break;
    case 2:
      f = (a, b) => a + b;
      break;
    case 3:
      f = (a, b) => a * b;
      break;
    default:
      break;
  }
  return f;
};

const getOperationString = (operation) => {
  let op = '';
  switch (operation) {
    case 1:
      op = '-';
      break;
    case 2:
      op = '+';
      break;
    case 3:
      op = '*';
      break;
    default:
      break;
  }
  return op;
};

const getGameStepQuery = () => {
  const query = {

  };

  const opA = getOperand();
  const opB = getOperand();
  const operation = getRandomInt(1, 3);
  query.result = getCalculationResult(operation)(opA, opB);
  query.toString = () => `${opA} ${getOperationString(operation)} ${opB} = `;

  query.check = c => query.result === parseInt(c, 10);
  query.getCorrectAnswer = () => query.result;

  return query;
};

export default () => playGame(baseGame(gameDescription, getGameStepQuery));
