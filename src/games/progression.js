#!/usr/bin/env node
import playGame from '../engine';
import { getRandomInt } from '../utils';

const progressionCountMin = 3;
const progressionCountMax = 15;
const progressionStartMin = 1;
const progressionStartMax = 15;
const progressionStepMin = 1;
const progressionStepMax = 10;

const getProgression = (progressionStartElement, progressionElementsCount, progressionStep) => {
  if (progressionElementsCount === 0) {
    return [];
  }
  return [progressionStartElement, ...getProgression(
    progressionStartElement + progressionStep,
    progressionElementsCount - 1,
    progressionStep,
  )];
};

const progressionGame = {
  description: 'What number is missing in the progression?',
  getNextQuestion() {
    const progressionStartElement = getRandomInt(progressionStartMin, progressionStartMax);
    const progressionElementsCount = getRandomInt(progressionCountMin, progressionCountMax);
    const progressionStep = getRandomInt(progressionStepMin, progressionStepMax);
    const progression = getProgression(
      progressionStartElement,
      progressionElementsCount,
      progressionStep,
    );
    const opA = progression.splice(getRandomInt(0, progression.length - 1), 1, '..');
    return {
      text: progression.concat(' '),
      answer: opA.toString(),
    };
  },
};
export default () => playGame(progressionGame);
