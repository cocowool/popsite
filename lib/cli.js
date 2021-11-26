#!/usr/bin/env node
'use strict'

const Promise = require('bludbird');
const findPkg = require('./find_pkg');


// require = require('esm')(module /*, options*/);
// require('./cli').cli(process.argv);

function entry(cwd = process.cwd(), args){
    process.title = 'popsite';

    console.log("popsite begin to process.");

    console.log(args);
    console.log(cwd);
    console.log(process.argv);

    // new Pop(path, args);
    return findPkg(cwd, args).then( path => {
        console.log(" Log in return .... ")
    })
}

entry.console = {
    // init: require('./console/init'),
    help: require('./console/help')
}

function loadModule(path, args) {
    return Promise.try(() => {
        console.log("loadModule .. . .")
        return new Pop(path, args)
    });
}

module.exports = entry;
