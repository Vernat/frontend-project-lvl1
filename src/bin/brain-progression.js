#!/usr/bin/env node
import { runBrainGame } from '../games/engine';
import { showBrainProgressionRulesInfo, brainProgressionRound } from '../games/progression';

runBrainGame(brainProgressionRound, showBrainProgressionRulesInfo);
