#! /usr/bin/env node

'use strict';

// console.log('Pop init in ./bin/pop.js');
// console.log('Begin testing popsite / pop command');
// console.log(__dirname);

require('../lib/cli')(require('optimist').argv);