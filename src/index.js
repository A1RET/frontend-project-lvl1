import readlineSync from 'readline-sync';

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game[0]);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  let wins = 0;
  while (wins < 3) {
    const qA = game[1]();
    console.log(`Question: ${qA[0]}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = qA[1];

    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\n Let's try again, ${playerName}`);
    }

    console.log('Correct!');

    wins += 1;
  }

  return console.log(`Congratulations, ${playerName}!`);
};
