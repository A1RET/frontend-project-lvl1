import engine from '..';
import makeRandomNum from '../utils';

const description = 'What is the result of the expression?\n';

const operators = '+-*';

const runGame = () => {
  const num1 = randomNum(0, 100);
  const num2 = randomNum(0, 100);

  const operator = operators[randomNum(0, operators.length - 1)];

  const question = (`${num1} ${operator} ${num2}`);

  let answer = 0;

  switch (operator) {
    case '+':
      answer = String(num1 + num2);
      break;
    case '-':
      answer = String(num1 - num2);
      break;
    default:
      answer = String(num1 * num2);
      break;
  }

  return [question, answer];
};

export default () => {
  engine(description, runGame);
};
