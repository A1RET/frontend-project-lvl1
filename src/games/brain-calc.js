import engine, { randomNum } from '..';

const game = () => {
  const description = 'What is the result of the expression?\n';

  const qA = () => {
    const num1 = randomNum(0, 100);
    const num2 = randomNum(0, 100);

    const operators = '+-*';
    const operator = operators[randomNum(0, 2)];

    const question = (`${num1} ${operator} ${num2}`);

    let answer = 0;

    if (operator === '+') {
      answer = String(num1 + num2);
    } else if (operator === '-') {
      answer = String(num1 - num2);
    } else {
      answer = String(num1 * num2);
    }

    return [question, answer];
  };

  return [description, qA];
};

export default () => {
  engine(game());
};
