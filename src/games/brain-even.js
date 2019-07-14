import engine, { randomNum } from '..';

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';

  const qA = () => {
    const question = randomNum(0, 100);

    const answer = (question % 2 === 0) ? 'yes' : 'no';

    return [question, answer];
  };

  return [description, qA];
};

export default () => {
  engine(game());
};
