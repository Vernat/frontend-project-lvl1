#!/usr/bin/env node
import { runBrainGame } from '../games/engine';
import { showBrainPrimeRulesInfo, brainPrimeRound } from '../games/prime';

runBrainGame(brainPrimeRound, showBrainPrimeRulesInfo);
