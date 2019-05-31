import playGame from '../engine';
import getRandomInt from '../utils';

const gameDescription = 'What is the result of the expression?';

const operations = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const a = getRandomInt(0, 10);
  const b = getRandomInt(0, 10);
  const keys = Object.keys(operations);
  const index = getRandomInt(0, keys.length - 1);
  const sign = keys[index];
  const func = operations[sign];

  return {
    question: `${a} ${sign} ${b} = `,
    answer: (func(a, b)).toString(),
  };
};

export default () => playGame(gameDescription, generateRound);
