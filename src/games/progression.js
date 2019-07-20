import engine from '..';
import makeRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeGameData = () => {
  const startNum = makeRandomNum(0, 10);
  const diff = makeRandomNum(1, 10);
  const hiddenNumIndex = makeRandomNum(1, 10);
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    let nextNum = startNum + diff * i;
    if (i === hiddenNumIndex) {
      nextNum = '..';
    }
    question = `${question} ${nextNum}`;
  }

  const answer = startNum + diff * hiddenNumIndex;

  return [question, answer];
};

export default () => {
  engine(description, makeGameData);
};
