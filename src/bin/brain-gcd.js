#!/usr/bin/env node
import { runBrainGame } from '../games/engine';
import { showBrainGcdRulesInfo, brainGcdRound } from '../games/gcd';

runBrainGame(brainGcdRound, showBrainGcdRulesInfo);
