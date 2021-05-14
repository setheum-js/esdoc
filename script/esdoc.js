#!/usr/bin/env node
const sh = require('./sh');

sh.rm('./out/docs');
sh.mkdir('./out/docs');

sh.rm('./node_modules/esdocs');
sh.mkdir('./node_modules/esdocs/out/src');
sh.cp('./out/src', './node_modules/esdocs/out/src/');
sh.cp('./package.json', './node_modules/esdocs/package.json');
sh.exec('node ./node_modules/esdocs/out/src/esdocsCLI.js');
