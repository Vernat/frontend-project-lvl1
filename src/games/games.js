import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import { askUserName, sayWelcome, showUserName } from '..';


const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const maxValue = 30;
const questionCount = 3;

export const runBrainGame = (gameRoundFunc, showGameRuleFunc) => {
  sayWelcome();
  const userName = askUserName();
  showUserName(userName);
  showGameRuleFunc();
  let questionsCounter = 0;
  while (questionsCounter < questionCount) {
    const newRound = gameRoundFunc();
    const question = car(newRound);
    const correctAnswer = cdr(newRound);
    const usersAnswer = readlineSync.question(`Question ${question}\n`);
    if (usersAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!\n`);
      return;
    }
    questionsCounter += 1;
  }
  console.log(`Congratulations, ${userName}!\n`);
};


export const showBrainEvenRulesInfo = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const brainEvenRound = () => {
  const randomValue = getRandomInt(maxValue);
  const correctAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
  return cons(randomValue, correctAnswer);
};


export const showBrainCalcRulesInfo = () => {
  console.log('What is the result of the expression?\n');
};

export const brainCalcRound = () => {
  const a = getRandomInt(maxValue);
  const b = getRandomInt(maxValue);
  const randOperationValue = getRandomInt(maxValue) % 3;
  switch (randOperationValue) {
    case 0: return cons(`${a} + ${b}`, String(a + b));
    case 1: return cons(`${a} - ${b}`, String(a - b));
    case 2: return cons(`${a} * ${b}`, String(a * b));
    default: return cons(`${a} * ${b}`, String(a * b));
  }
};


export const showBrainGcdRulesInfo = () => {
  console.log('Find the greatest common divisor of given numbers.\n');
};

export const brainGcdRound = () => {
  const getGcd = (val1, val2) => {
    let a = val1;
    let b = val2;
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return a + b;
  };
  const a = getRandomInt(maxValue);
  const b = getRandomInt(maxValue);
  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));
  return cons(question, correctAnswer);
};
