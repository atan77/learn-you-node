var fs = require('fs');
var path = require('path');
//var tempArr = [];
//var output = "";

module.exports = function (dirname, ext, callback) {
        fs.readdir(dirname, function (err, fileList) {

        if (err) {
        return callback(err);
        } else {

var regexTest = new RegExp('.+\.' + ext + '$');
fileList = fileList.filter(function(files) {
    return path.extname(files) === '.' + ext;
});

            return callback(null,fileList);
        }
    });
};
