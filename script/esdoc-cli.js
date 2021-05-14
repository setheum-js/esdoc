#!/usr/bin/env node
const path = require('path');
const sh = require('./sh');

const esdocs = path.resolve(__dirname, '..', 'src', 'esdocsCLI.js');
const babel = path.resolve(__dirname, '..', 'node_modules', '.bin', 'babel-node');
const arg = [].concat(process.argv).splice(2);
const cmd = [babel, esdocs].concat(arg).join(' ');
sh.exec(cmd);
