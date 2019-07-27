import engine from '..';
import makeRandomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  const iter = (num, acc) => {
    if ((acc !== num && num % acc === 0) || num <= 1) {
      return false;
    }

    if (acc === num) {
      return true;
    }
    return iter(n, acc + 1);
  };

  return iter(n, 2);
};

const makeGameData = () => {
  const question = makeRandomNum(1, 100);

  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  engine(description, makeGameData);
};
