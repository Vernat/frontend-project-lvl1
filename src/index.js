import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const showBrainEvenRulesInfo = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

export const showUserName = name => console.log(`Hello ${name}`);

export const askUserName = () => readlineSync.question('May I have your name? ');
