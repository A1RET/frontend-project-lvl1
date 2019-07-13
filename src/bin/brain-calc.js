#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

const myName = userName();

const calcGame = () => {
  let wins = 0;
  const operators = '+-*';

  while (wins < 3) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operator = operators[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

    console.log(`Question: ${num1} ${operator} ${num2}`);

    let correctAnswer = 0;

    if (operator === '+') {
      correctAnswer = String(num1 + num2);
    } else if (operator === '-') {
      correctAnswer = String(num1 - num2);
    } else {
      correctAnswer = String(num1 * num2);
    }

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\n Let's try again, ${myName}`);
    }

    console.log('Correct!');

    wins += 1;
  }
  return console.log(`Congratulations, ${myName}!`);
};

calcGame();
