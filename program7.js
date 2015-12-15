//add required functions

var fs = require('fs')
var http = require('http')

//invoke http.get, with URL and function
http.get(process.argv[2], function(response) {
    //response for data
response.on('data', function(chunk) {
    //output the data received and convert to string as the data comes out as buffer
    console.log(chunk.toString());
});
}).on('error', function(e) {
console.log("Got error: " + e.message);
});