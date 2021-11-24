'use strict'

// require = require('esm')(module /*, options*/);
// require('./cli').cli(process.argv);

function entry(cwd = process.cwd(), args){
    process.title = 'popsite';

    console.log("popsite begin to process.");

    console.log(args);
    console.log(cwd);
    console.log(process.argv);

}

entry.console = {
    // init: require('./console/init'),
    help: require('./console/help')
}

module.exports = entry;