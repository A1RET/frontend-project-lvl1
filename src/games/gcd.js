import engine from '..';
import makeRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const gcd = (num1, num2) => {
  /* Нахождение НОК по Алгоритму Евклида */
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

const makeGameData = () => {
  const num1 = makeRandomNum(0, 100);
  const num2 = makeRandomNum(0, 100);

  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return [question, answer];
};

export default () => {
  engine(description, makeGameData);
};
