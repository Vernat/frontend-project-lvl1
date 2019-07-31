import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { askUserName, sayWelcome, showUserName } from '..';

const roundsCount = 3;

export const runBrainGame = (gameNextFunc, getGameRule) => {
  sayWelcome();
  const userName = askUserName();
  showUserName(userName);
  console.log(getGameRule());
  for (let i = 0; i < roundsCount; i += 1) {
    const nextRound = gameNextFunc();
    const question = car(nextRound);
    const correctAnswer = cdr(nextRound);
    const usersAnswer = readlineSync.question(`Question ${question}\n`);
    if (usersAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export default runBrainGame;
