import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  for (let i = 0; i <= roundsCount; i += 1) {
    if (i === roundsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
};

export default playGame;
