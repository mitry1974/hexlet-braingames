import playGame from '../engine';
import getRandomInt from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => ((a === 0) ? b : findGCD(b % a, a));

const generateRound = () => {
  const a = getRandomInt(1, 10);
  const b = getRandomInt(1, 10);
  return {
    question: `${a} ${b}`,
    answer: findGCD(a, b).toString(),
  };
};

export default () => playGame(gameDescription, generateRound);
