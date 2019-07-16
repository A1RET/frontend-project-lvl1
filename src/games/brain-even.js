import engine, { randomNum } from '..';

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';

  const isEven = num => num % 2 === 0;

  const questionAnswer = () => {
    const question = randomNum(0, 100);

    const answer = isEven(question) ? 'yes' : 'no';

    return [question, answer];
  };

  return [description, questionAnswer];
};

export default () => {
  engine(game());
};
