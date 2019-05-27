#!/usr/bin/env node
import playGame from '../engine';
import { getOperand } from '../utils';

const findGCD = (a, b) => ((a === 0) ? b : findGCD(b % a, a));

const gcdGame = {
  getGameDescription: () => 'Find the greatest common divisor of given numbers.',
  getNextQuestion() {
    const question = {};
    const opA = getOperand();
    const opB = getOperand();
    const answer = findGCD(opA, opB);
    question.getDescription = () => `${opA} ${opB}`;
    question.checkAnswer = c => parseInt(c, 10) === answer;
    question.getCorrectAnswer = () => answer;
    return question;
  },
};

export default () => playGame(gcdGame);
