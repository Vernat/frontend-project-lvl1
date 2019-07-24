import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { askUserName, sayWelcome, showUserName } from '..';


export const runBrainGame = (gameRoundFunc, showGameRuleFunc) => {
  sayWelcome();
  const userName = askUserName();
  showUserName(userName);
  showGameRuleFunc();
  let questionsCounter = 0;
  const questionCount = 3;
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

export default runBrainGame;
