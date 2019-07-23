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
runBrainEvenGame(userName);
