'use strict'

const fs = require('fs')
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
  });

var Popsite = {
    markdown2html : function( file_name ){

        console.log("Begin Markdown to html, filename : " + file_name)
        // markdown_content = 
        // const content = fs.readFile(file_name, 'utf8');
        // console.log(content);

        fs.readFile( file_name, function(err, data){
            if( err ){
                // console.log(__dirname + '/' + file_name);
                console.log( file_name + ' does not exists! ');
            }else{
                console.log(data)
                console.log(md.render(data.toString()))
            }
        })
        // console.log(markdown_content)
    }
}

module.exports = Popsite;

// class Pop {
//     constructor( base = process.cwd(), args = {}){
//         super();

//         console.log("Popsite initialize.")
//     }
// }