import playGame from '../engine';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';
const length = 10;

const getProgression = (start, count, step) => {
  if (count === 0) {
    return [];
  }
  return [start, ...getProgression(
    start + step,
    count - 1,
    step,
  )];
};

const generateRound = () => {
  const start = getRandomInt(1, 15);
  const step = getRandomInt(1, 10);
  const progression = getProgression(
    start,
    length,
    step,
  );
  const numbers = progression.splice(getRandomInt(0, progression.length - 1), 1, '..');
  return {
    question: progression.join(' '),
    answer: numbers.toString(),
  };
};
export default () => playGame(gameDescription, generateRound);
