#!/usr/bin/env node

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getOperand = () => getRandomInt(1, 100);

const game = (description, roundsCount, query) => (
  {
    getRoundsCount() {
      return roundsCount;
    },
    getGameDescription() {
      return description;
    },
    getNextQuery() {
      return query();
    },
  });
export { game, getRandomInt, getOperand };
