import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const showBrainEvenRulesInfo = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

export const showUserName = name => console.log(`Hello ${name}`);

export const askUserName = () => readlineSync.question('May I have your name? ');

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const runBrainEvenGame = (userName) => {
  let questionsCounter = 0;
  let userFailed = false;
  while (questionsCounter < 3 && !userFailed) {
    const randomValue = getRandomInt(100);
    const correctAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
    const usersAnswer = readlineSync.question(`Question ${randomValue} `);
    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      userFailed = true;
    }
    questionsCounter += 1;
  }
  if (!userFailed) {
    console.log(`Congratulations, ${userName}!`);
  }
};
