#!/usr/bin/env node
import playGame from '../engine';
import { getRandomInt } from '../utils';

const progressionCountMin = 3;
const progressionCountMax = 15;
const progressionStartMin = 1;
const progressionStartMax = 15;

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
  getGameDescription: () => 'What number is missing in the progression?',
  getNextQuestion() {
    const question = {};
    const progressionStartElement = getRandomInt(progressionStartMin, progressionStartMax);
    const progressionElementsCount = getRandomInt(progressionCountMin, progressionCountMax);
    const progressionStep = getRandomInt(1, 10);
    const progression = getProgression(
      progressionStartElement,
      progressionElementsCount,
      progressionStep,
    );
    const [answer] = progression.splice(getRandomInt(0, progression.length - 1), 1, '..');
    question.getDescription = () => progression.concat(' ');
    question.checkAnswer = c => parseInt(c, 10) === answer;
    question.getCorrectAnswer = () => answer;
    return question;
  },
};
export default () => playGame(progressionGame);
