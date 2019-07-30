import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const showUserName = name => console.log(`Hello ${name}\n`);

export const askUserName = () => readlineSync.question('May I have your name?\n');
