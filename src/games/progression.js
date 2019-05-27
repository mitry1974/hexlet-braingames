#!/usr/bin/env node
import playGame from '../engine';
import { getRandomInt } from '../utils';

const progressionCountMin = 3;
const progressionCountMax = 15;
const progressionStartMin = 1;
const progressionStartMax = 15;

const getProgression = (nFrom, nCount, step) => {
  if (nCount === 0) {
    return [];
  }
  return [nFrom, ...getProgression(nFrom + step, nCount - 1, step)];
};

const progressionGame = {
  getGameDescription: () => 'What number is missing in the progression?',
  getNextQuestion() {
    const query = {};
    const progression = getProgression(
      getRandomInt(progressionStartMin, progressionStartMax),
      getRandomInt(progressionCountMin, progressionCountMax),
      getRandomInt(1, 10),
    );
    const [answer] = progression.splice(getRandomInt(0, progression.length - 1), 1, '..');
    query.getDescription = () => progression.concat(' ');
    query.checkAnswer = c => parseInt(c, 10) === answer;
    query.getCorrectAnswer = () => answer;
    return query;
  },
};
export default () => playGame(progressionGame);
