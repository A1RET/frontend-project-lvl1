import readlineSync from 'readline-sync';

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  const typeName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${typeName}!\n`);
  return typeName;
};
