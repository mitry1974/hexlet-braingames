import playGame from '../engine';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';

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

const getNextRound = () => {
  const start = getRandomInt(1, 15);
  const step = getRandomInt(1, 10);
  const length = 10;
  const progression = getProgression(
    start,
    length,
    step,
  );
  const a = progression.splice(getRandomInt(0, progression.length), 1, '..');
  return {
    question: progression.concat(' '),
    answer: a.toString(),
  };
};
export default () => playGame(gameDescription, getNextRound);
