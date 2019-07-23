#!/usr/bin/env node
import {
  askUserName,
  showUserName,
  sayWelcome,
  showBrainEvenRulesInfo,
  runBrainEvenGame,
} from '..';

sayWelcome();
showBrainEvenRulesInfo();
const userName = askUserName();
showUserName(userName);

const questionCount = 3;
const maxValue = 100;
runBrainEvenGame(userName, questionCount, maxValue);
