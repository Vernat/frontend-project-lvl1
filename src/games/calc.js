import { getRandomNumberBetween, getRandomOperationWithAnswer } from './random';
import { runBrainGame } from './engine';

export const getRulesInfo = () => 'What is the result of the expression?\n';

export const getNextRound = () => {
  const maxValue = 30;
  const a = getRandomNumberBetween(0, maxValue);
  const b = getRandomNumberBetween(0, maxValue);
  return getRandomOperationWithAnswer(a, b);
};

export default () => runBrainGame(getNextRound, getRulesInfo);
