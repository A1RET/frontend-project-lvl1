import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export default (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, answer] = gameData();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = String(answer);

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};
