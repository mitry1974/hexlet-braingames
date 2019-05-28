#!/usr/bin/env node

import playGame from '../engine';
import { getOperand, getRandomInt } from '../utils';

const getCalculationResult = (operation) => {
  let f;
  switch (operation) {
    case 1:
      return (a, b) => a - b;
    case 2:
      return (a, b) => a + b;
    case 3:
      return (a, b) => a * b;
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
  description: 'What is the result of the expression?',
  getNextQuestion() {
    const opA = getOperand();
    const opB = getOperand();
    const operation = getRandomInt(1, 3);
    return {
      answer: (getCalculationResult(operation)(opA, opB)).toString(),
      text: `${opA} ${getOperationString(operation)} ${opB} = `,
    };
  },
};

export default () => playGame(calcGame);
