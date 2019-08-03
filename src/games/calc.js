import engine from '..';
import makeRandomNum from '../utils';

const description = 'What is the result of the expression?';

const operators = '+-*';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const makeGameData = () => {
  const a = makeRandomNum(0, 100);
  const b = makeRandomNum(0, 100);
  const operator = operators[makeRandomNum(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;
  const answer = calculate(a, b, operator);

  return [question, answer];
};

export default () => {
  engine(description, makeGameData);
};
