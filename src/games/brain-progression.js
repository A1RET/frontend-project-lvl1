import engine, { randomNum } from '..';

const game = () => {
  const description = 'What number is missing in the progression?\n';

  const questionAnswer = () => {
    let num = randomNum(0, 10);
    const step = randomNum(1, 10);
    const index = randomNum(1, 10);
    let question = (`${num}`);
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

  return [description, questionAnswer];
};

export default () => {
  engine(game());
};
