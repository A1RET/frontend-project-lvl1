import engine from '..';
import makeRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeGameData = () => {
  const init = makeRandomNum(0, 10);
  const diff = makeRandomNum(1, 10);
  const hiddenElementIndex = makeRandomNum(0, progressionLength - 1);
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    let nextElement = init + diff * i;
    if (i === hiddenElementIndex) {
      nextElement = '..';
    }
    question = `${question} ${nextElement}`.trim();
  }

  const answer = init + diff * hiddenElementIndex;

  return [question, answer];
};

export default () => {
  engine(description, makeGameData);
};
