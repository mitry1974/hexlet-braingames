#!/usr/bin/env node
import playGame from '../engine';
import { getOperand } from '../utils';

const isEven = n => n % 2 === 0;
const evenGame = {
  description: 'Answer "yes" if number even otherwise answer "no".',
  getNextQuestion() {
    const opA = getOperand();
    return {
      text: opA.toString(),
      answer: (isEven(opA) ? 'yes' : 'no'),
    };
  },
};

export default () => playGame(evenGame);
