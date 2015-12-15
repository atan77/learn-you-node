var mymodule = require('./program5a.js');

var callback = function (err, result) {
        if (err) {
        console.error(err);
        } else {
            result.forEach(function(fileList) {
        console.log(fileList);
        });
        }
}  
        
mymodule(process.argv[2],process.argv[3], callback);