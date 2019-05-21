import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getNegAnswer = answer => (answer === 'yes' ? 'no' : 'yes');

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let bRes = false;
  for (let i = 0; i < 3; i += 1) {
    const iQuery = getRandomInt(1, 100);
    console.log(`Question: ${iQuery}`);
    const answer = readlineSync.question('Your answer: ');
    const bEven = iQuery % 2 === 0;
    bRes = (bEven && answer === 'yes') || (!bEven && answer === 'no');
    const infoString = bRes ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${getNegAnswer(answer)}'`;
    console.log(infoString);
    if (!bRes) {
      break;
    }
  }
  const finalString = bRes ? `Congratulations, ${name}!` : `Lets try again, ${name}!`;
  console.log(finalString);
};
