var http= require('http')
var strArr = [];
var str="";

http.get(process.argv[2], function(response) {
//    console.log("Got response: " + response.statusCode);
    //response for data
response.on('data', function(chunk) {
    //push output into an array, may simplify future processes
    strArr.push(chunk);
});

response.on('end', function() {
    //join the array into a string
    str = strArr.join("");
    //return the string length
    console.log(str.length);
    //return the string
    console.log(str);
});

}).on('error', function(e) {
console.log("Got error: " + e.message);
});