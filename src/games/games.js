import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';


const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const maxValue = 10;
const questionCount = 3;

export const runBrainGame = (userName, gameRoundFunc) => {
  let questionsCounter = 0;
  while (questionsCounter < questionCount) {
    const newRound = gameRoundFunc();
    const question = car(newRound);
    const correctAnswer = cdr(newRound);
    const usersAnswer = readlineSync.question(`Question ${question} `);
    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    questionsCounter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};


export const brainEvenRound = () => {
  const randomValue = getRandomInt(maxValue);
  const correctAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
  return cons(randomValue, correctAnswer);
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
