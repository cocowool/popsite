'use strict'

// require = require('esm')(module /*, options*/);
// require('./cli').cli(process.argv);

function entry(cwd = process.cwd(), args){
    process.title = 'popsite';

    console.log("popsite begin to process.");
    console.log(args);
    console.log(cwd);


}

entry.console = {
    help: require('./console/help')
}

module.exports = entry;