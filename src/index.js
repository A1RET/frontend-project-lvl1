import readlineSync from 'readline-sync';

export default () => {
  const typeName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${typeName}!`);
};