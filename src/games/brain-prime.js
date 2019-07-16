import engine, { randomNum } from '..';

const game = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

  const isPrime = (n) => {
    const iter = (num, acc) => {
      if (acc !== num && num % acc === 0) {
        return 'no';
      }

      if (acc === num) {
        return 'yes';
      }
      return iter(n, acc + 1);
    };

    return iter(n, 2);
  };

  const questionAnswer = () => {
    const num = randomNum(1, 100);

    const question = num;

    const answer = isPrime(num);

    return [question, answer];
  };

  return [description, questionAnswer];
};

export default () => {
  engine(game());
};
