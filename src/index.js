import readlineSync from 'readline-sync';

export default (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  let wins = 0;
  while (wins < 3) {
    const [question, answer] = gameData();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = String(answer);

    if (playerAnswer !== correctAnswer) {
      return console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\n Let's try again, ${playerName}`);
    }

    console.log('Correct!');

    wins += 1;
  }

  return console.log(`Congratulations, ${playerName}!`);
};
