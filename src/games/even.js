#!/usr/bin/env node
import playGame from '../engine';
import { getOperand } from '../utils';

const isEven = n => n % 2 === 0;
const evenGame = {
  getGameDescription: () => 'Answer "yes" if number even otherwise answer "no".',
  getNextQuestion() {
    const question = {};
    const opA = getOperand();
    const answer = (isEven(opA) ? 'yes' : 'no');
    question.getDescription = () => opA;
    question.checkAnswer = c => c === answer;
    question.getCorrectAnswer = () => answer;
    return question;
  },
};

export default () => playGame(evenGame);
