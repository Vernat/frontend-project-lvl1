import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { askUserName, sayWelcome, showUserName } from '..';

export const runBrainGame = (gameRoundFunc, getGameRuleFunc) => {
  sayWelcome();
  const userName = askUserName();
  showUserName(userName);
  console.log(getGameRuleFunc());
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const newRound = gameRoundFunc();
    const question = car(newRound);
    const correctAnswer = cdr(newRound);
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
