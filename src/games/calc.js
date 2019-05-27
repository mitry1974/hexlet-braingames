#!/usr/bin/env node

import playGame, { getOperand, getRandomInt } from '../engine';

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

const calcGame = {
  getGameDescription: () => 'What is the result of the expression?',
  getNextQuestion() {
    const query = {

    };
    const opA = getOperand();
    const opB = getOperand();
    const operation = getRandomInt(1, 3);
    const answer = getCalculationResult(operation)(opA, opB);
    query.getDescription = () => `${opA} ${getOperationString(operation)} ${opB} = `;
    query.checkAnswer = c => answer === parseInt(c, 10);
    query.getCorrectAnswer = () => answer;
    return query;
  },
};

export default () => playGame(calcGame);
