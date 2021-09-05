'use strict'

require = require('esm')(module /*, options*/);
require('./cli').cli(process.argv);

// function entry(cwd = process.cwd(), args){
//     process.title = 'popsite';

//     console.log("test popsite.");
// }

// module.exports = entry;