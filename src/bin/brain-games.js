#!/usr/bin/env node
import { askUserName, sayWelcome, showUserName } from '..';

sayWelcome();
const userName = askUserName();
showUserName(userName);
