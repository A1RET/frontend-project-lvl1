import engine from '..';
import makeRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const gcd = (num1, num2) => {
  /* Нахождение НОК по Алгоритму Евклида */
  let frst = 0;/* Большее число (стоит на первом месте дальше в выражении) */
  let scnd = 0;/* Меньшее число (стоит на втором месте дальше в выражении) */

  if (num1 > num2) {
    frst = num1;
    scnd = num2;
  } else {
    frst = num2;
    scnd = num1;
  }

  let mod = frst % scnd;

  while (mod !== 0) {
    const res = scnd % mod;
    scnd = mod;
    mod = res;
  }

  return scnd;
};

const runGame = () => {
  const num1 = randomNum(0, 100);
  const num2 = randomNum(0, 100);

  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return [question, answer];
};

export default () => {
  engine(description, runGame);
};
