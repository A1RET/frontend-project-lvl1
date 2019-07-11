#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
const myName = userName();

const evenGame = () => {
  let wins = 0;

  while (wins < 3) {
    const num = Math.floor(Math.random() * 100);

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';

    if ((answer !== 'yes' && answer !== 'no') || answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\n Let's try again, ${myName}`);
    }

    console.log('Correct!');

    wins += 1;
  }
  return console.log(`Congratulations, ${myName}!`);
};

evenGame();
