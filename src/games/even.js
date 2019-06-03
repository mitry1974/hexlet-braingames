import playGame from '../engine';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = n => n % 2 === 0;
const generateRound = () => {
  const question = getRandomInt(1, 10);
  return {
    question,
    answer: (isEven(question) ? 'yes' : 'no'),
  };
};

export default () => playGame(gameDescription, generateRound);
