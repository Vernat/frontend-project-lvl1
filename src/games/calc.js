import { cons } from '@hexlet/pairs';
import { getRandomInt } from './random';


export const showBrainCalcRulesInfo = () => {
  console.log('What is the result of the expression?\n');
};

export const brainCalcRound = () => {
  const maxValue = 30;
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
