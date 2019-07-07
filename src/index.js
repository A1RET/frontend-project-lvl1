import readlineSync from 'readline-sync';

export const userName = () => { 
  const typeName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + typeName + '!');
};