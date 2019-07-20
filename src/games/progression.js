import engine from '..';
import makeRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const makeGameData = () => {
  let num = makeRandomNum(0, 10);
  const step = makeRandomNum(1, 10);
  const index = makeRandomNum(1, 10);
  let question = `${num}`;
  let answer = 0;

  if (index === 1) {
    question = '.. ';
    answer = String(num);
  }

  for (let i = 2; i <= 10; i += 1) {
    num += step;
    if (i === index) {
      question = `${question} ..`;
      answer = String(num);
    } else {
      question = `${question} ${num}`;
    }
  }

  return [question, answer];
};

export default () => {
  engine(description, makeGameData);
};
