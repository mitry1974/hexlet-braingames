#!/usr/bin/env node
const roundsCount = 3;
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getOperand = () => getRandomInt(1, 100);

const getQuery = () => {
  const query = {};
  query.a = getOperand();
  query.toString = () => `${query.a}`;
  query.isEven = () => query.a % 2 === 0;
  query.check = c => (query.isEven() && c === 'yes') || (!query.isEven() && c === 'no');
  query.getCorrectAnswer = () => (query.isEven() ? 'yes' : 'no');
  return query;
};

const evenGame = () => (
  {
    getRoundsCount() {
      return roundsCount;
    },
    getGameDescription() {
      return gameDescription;
    },
    getNextQuery() {
      return getQuery();
    },
  });

export default evenGame;
