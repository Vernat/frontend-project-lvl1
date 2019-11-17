import { cons, car, cdr } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

const operations = l(
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
);

const maxValue = 30;

const getRoundData = () => {
  const a = getRandomNumber(0, maxValue);
  const b = getRandomNumber(0, maxValue);
  const operationData = random(operations);
  const operator = car(operationData);
  const operation = cdr(operationData);
  const question = `${a} ${operator} ${b}`;
  const answer = operation(a, b).toString();
  return cons(question, answer);
};

const gameInfo = 'What is the result of the expression?';

export default () => runBrainGame(getRoundData, gameInfo);
