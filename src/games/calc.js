import { getRandomInt, getRandomOperationWithAnswer } from './random';
import { runBrainGame } from './engine';

export const getRulesInfo = () => 'What is the result of the expression?\n';

export const brainCalcRound = () => {
  const maxValue = 30;
  const a = getRandomInt(maxValue);
  const b = getRandomInt(maxValue);
  return getRandomOperationWithAnswer(a, b);
};

export default () => runBrainGame(brainCalcRound, getRulesInfo);
