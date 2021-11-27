#!/usr/bin/env node
'use strict'

const program = require('commander');
const Promise = require('bluebird');
// const { program } = require('commander');
const findPkg = require('./find_pkg');



// require = require('esm')(module /*, options*/);
// require('./cli').cli(process.argv);

function entry(cwd = process.cwd(), args){
    process.title = 'popsite';

    // console.log("popsite begin to process.");
    // console.log(args);
    // console.log(cwd);
    // console.log(process.argv);

    // new Pop(path, args);
    // return findPkg(cwd, args).then( path => {
    //     console.log(" Log in return .... ")
    // })

    // Command and parameters
    // console.log( process.argv.slice(2) )

    // Current Folder Path
    var current_path = process.cwd();
    // 0 is node command, 1 is the entry file
    var file_name = process.argv.slice(2)

    program
        .version(require('../package.json').version)
        .usage('pop markdown_file')

    // console.log(current_path)
    // console.log(file_name)

    // Convert Markdown To HTML

}

// entry.console = {
//     // init: require('./console/init'),
//     help: require('./console/help')
// }

function loadModule(path, args) {
    return Promise.try(() => {
        console.log("loadModule .. . .")
        return new Pop(path, args)
    });
}

module.exports = entry;
