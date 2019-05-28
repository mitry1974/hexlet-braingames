#!/usr/bin/env node

import playGame from '../engine';
import { getOperand, getRandomInt } from '../utils';

const minOperationNumber = 0;
const maxOperationNumber = 3;

const operations = [
  ['-', (a, b) => a - b],
  ['+', (a, b) => a + b],
  ['*', (a, b) => a * b],
];

const calcGame = {
  description: 'What is the result of the expression?',
  getNextQuestion() {
    const opA = getOperand();
    const opB = getOperand();
    const [operationSymbol, operationFunction] = operations[getRandomInt(
      minOperationNumber, maxOperationNumber,
    )];

    return {
      answer: (operationFunction(opA, opB)).toString(),
      text: `${opA} ${operationSymbol} ${opB} = `,
    };
  },
};

export default () => playGame(calcGame);
