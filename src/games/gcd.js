#!/usr/bin/env node
import playGame from '../engine';
import { getOperand } from '../utils';

const findGCD = (a, b) => ((a === 0) ? b : findGCD(b % a, a));

const gcdGame = {
  getGameDescription: () => 'Find the greatest common divisor of given numbers.',
  getNextQuestion() {
    const query = {};
    const opA = getOperand();
    const opB = getOperand();
    const answer = findGCD(opA, opB);
    query.getDescription = () => `${opA} ${opB}`;
    query.checkAnswer = c => parseInt(c, 10) === answer;
    query.getCorrectAnswer = () => answer;
    return query;
  },
};

export default () => playGame(gcdGame);
