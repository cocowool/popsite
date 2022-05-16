#!/usr/bin/env node
'use strict'

const async = require('async')

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
        .option('-f, --folder <markdown-file-folder>', 'Specify Markdown Files Folder')
        .option('-o, --output <html-file>', 'Specify Output Html File or Folder')
        .option('-d, --debug', 'Debug Mode')
        .option('-s, --server', 'Localhost Server')
        .description('Another static makrdown site tool.')
        .parse(process.argv)
        .action(function(option){
            console.log("Action");
        })

    // console.log(program.getOptionValue('debug'));
    console.log(program.getOptionValue('output'));

    if( program.getOptionValue('markdown') ) {
        var makrdown_file = program.opts().markdown;
        var html_file = program.opts().output

        Popsite.markdown2html(makrdown_file, html_file)
    }


    if( program.getOptionValue('server') ) {
        var http = require('http')

        var app = http.createServer(function(req, res){
            res.write("Hello popsite")
            res.end()
        })

        app.listen(4000, function(){
            console.log("Popsite Server start successfully, visit from http://127.0.0.1:4000 ...")
        })

        // var makrdown_file = program.opts().markdown;
        // var html_file = program.opts().output

        // Popsite.markdown2html(makrdown_file, html_file)
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

// module.exports = entry;

// Test Write as hexo
module.exports = function( args ){
    console.log('Test For popsite.')
    // Init Prameters
    var server = args.server ? true : false, init = args.init ? true : false
    
    var popsite = global.popsite = {
        get version(){ return require("../package.json").version }
    }

    async.auto({

    });

    console.log(args)
}