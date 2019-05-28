#!/usr/bin/env node
import playGame from '../engine';
import { getOperand } from '../utils';

const findGCD = (a, b) => ((a === 0) ? b : findGCD(b % a, a));

const gcdGame = {
  description: 'Find the greatest common divisor of given numbers.',
  getNextQuestion() {
    const opA = getOperand();
    const opB = getOperand();
    return {
      text: `${opA} ${opB}`,
      answer: findGCD(opA, opB).toString(),
    };
  },
};

export default () => playGame(gcdGame);
