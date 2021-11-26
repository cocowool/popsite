'use strict'


function findPkg(cwd, args = {} ) {
    console.log( 'Code in findPkg.');

    return checkPkg(cwd);
}

function checkPkg( path ) {
    console.log('Code in check Pkg');
}

module.exports = findPkg;