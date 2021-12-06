#!/usr/bin/env node
'use strict'

const { program } = require('commander');
const Promise = require('bluebird');
// const { program } = require('commander');
const findPkg = require('./find_pkg');
const Popsite = require('./popsite/index');
const fs = require('fs')

require('./popsite/index');


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
        .usage('<markdown_file> [--markdown <markdown_file>] [--output <html_file>]')
        .option('-m, --markdown <markdown-file>', 'Specify Markdown File')
        .option('-o, --output <html-file>', 'Specify Output Html File')
        .option('-d, --debug', 'Debug Mode')
        .description('Another static makrdown site tool.')
        .parse(process.argv)
        .action(function(option){
            console.log("Action");
        })

    // console.log(program.getOptionValue('debug'));
    console.log(program.getOptionValue('output'));

    if( program.getOptionValue('markdown') ) {
        var makrdown_file = program.opts().markdown;

        Popsite.markdown2html(makrdown_file)
    }

    // console.log(current_path)
    // console.log(file_name)


}

// Convert Markdown To HTML
function markdown_to_html(){

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
