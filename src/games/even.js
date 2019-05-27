#!/usr/bin/env node
import playGame, { getOperand } from '../engine';

const isEven = n => n % 2 === 0;
const evenGame = {
  getGameDescription: () => 'Answer "yes" if number even otherwise answer "no".',
  getNextQuestion() {
    const query = {};
    const opA = getOperand();
    const answer = (isEven(opA) ? 'yes' : 'no');
    query.getDescription = () => opA;
    query.checkAnswer = c => c === answer;
    query.getCorrectAnswer = () => answer;
    return query;
  },
};

export default () => playGame(evenGame);
