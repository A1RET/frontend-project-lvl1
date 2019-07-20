import engine from '..';
import makeRandomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const makeGameData = () => {
  const question = makeRandomNum(0, 100);

  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  engine(description, makeGameData);
};
