var fs = require('fs');
var path = require('path');
var dirname = process.argv[2];
var ext = process.argv[3];

//returns directory path
//directory = process.argv[2];
//    console.log(arguments);


var    dirContents = fs.readdir(dirname, function (err, dirlist) {
        //response if error occurs
        if (err) throw err;
        //required output for console, toString converts buffer output to string, then split and count number of array elements remembering that the last element does not have a new line
        for (i=0; i<dirlist.length; i++) {
            if(path.extname(dirlist[i]) == "."+process.argv[3])
            console.log(dirlist[i]);

}
    });

