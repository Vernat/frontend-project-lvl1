#!/usr/bin/env node
import { runBrainGame } from '../games/engine';
import { brainEvenRound, showBrainEvenRulesInfo } from '../games/even';

runBrainGame(brainEvenRound, showBrainEvenRulesInfo);
