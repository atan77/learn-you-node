//required for code to access the filesystem
var fs = require('fs')
//process.argv[2] is the filename passed to the function
//split on \n for regex search for new lines, this creates an array which will be one element too long as the last element won't have a new line attached
var newLineCount = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

console.log(newLineCount);