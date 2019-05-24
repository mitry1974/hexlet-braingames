#!/usr/bin/env node
import playGame, { baseGame, getRandomInt } from '../engine';

const gameDescription = 'What number is missing in the progression?';
const progressionCountMin = 2;
const progressionCountMax = 15;
const progressionStartMin = 1;
const progressionStartMax = 15;

const getProgression = (nFrom, nCount, step) => {
  if (nCount === 0) {
    return [];
  }
  return [nFrom, ...getProgression(nFrom + step, nCount - 1, step)];
};


const getGameStepQuery = () => {
  const query = {};
  const progression = getProgression(
    getRandomInt(progressionStartMin, progressionStartMax),
    getRandomInt(progressionCountMin, progressionCountMax),
    getRandomInt(1, 10),
  );
  [query.elem] = progression.splice(getRandomInt(0, progression.length - 1), 1, '..');
  query.progression = progression;
  query.toString = () => query.progression.concat(' ');
  query.check = c => parseInt(c, 10) === query.elem;
  query.getCorrectAnswer = () => query.elem;
  return query;
};

export default () => playGame(baseGame(gameDescription, getGameStepQuery));
