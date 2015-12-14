//enable filesystem access
var fs = require('fs');
var newLineCount = undefined;
//function to perform filesystem methods
function strExtract() {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        //response if error occurs
        if (err) throw err;
        //required output for console, toString converts buffer output to string, then split and count number of array elements remembering that the last element does not have a new line
        newLineCount = fileContents.toString().split('\n').length-1;
        console.log(newLineCount);
//        doneReading();
    });
}
//    function newLineCount() {
//        console.log();
//    }
    
    strExtract();
