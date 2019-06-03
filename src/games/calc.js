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
  const signs = Object.keys(operations);
  const operationIndex = getRandomInt(0, signs.length - 1);
  const sign = signs[operationIndex];
  const operation = operations[sign];

  return {
    question: `${a} ${sign} ${b} = `,
    answer: operation(a, b).toString(),
  };
};

export default () => playGame(gameDescription, generateRound);
