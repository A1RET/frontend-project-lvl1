import engine from '..';
import makeRandomNum from '../utils';

const description = 'What is the result of the expression?';

const operators = '+-*';

const makeGameData = () => {
  const num1 = makeRandomNum(0, 100);
  const num2 = makeRandomNum(0, 100);

  const operator = operators[makeRandomNum(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;

  let answer;

  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }

  return [question, answer];
};

export default () => {
  engine(description, makeGameData);
};
