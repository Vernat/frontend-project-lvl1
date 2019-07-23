#!/usr/bin/env node
import {
  askUserName,
  showUserName,
  sayWelcome,
  showBrainEvenRulesInfo,
} from '..';
import { runBrainGame, brainEvenRound } from '../games/games';

sayWelcome();
showBrainEvenRulesInfo();
const userName = askUserName();
showUserName(userName);
runBrainGame(userName, brainEvenRound);
