#!/usr/bin/env node
import { runBrainGame } from '../games/engine';
import { brainCalcRound, showBrainCalcRulesInfo } from '../games/calc';

runBrainGame(brainCalcRound, showBrainCalcRulesInfo);
