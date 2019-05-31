import playGame from '../engine';
import getRandomInt from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => ((a === 0) ? b : findGcd(b % a, a));

const generateRound = () => {
  const a = getRandomInt(1, 10);
  const b = getRandomInt(1, 10);
  return {
    question: `${a} ${b}`,
    answer: findGcd(a, b).toString(),
  };
};

export default () => playGame(gameDescription, generateRound);
