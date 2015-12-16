var http = require('http')
var strArr = [];
var str = "";

function getHTTP(index) {
http.get(process.argv[index+2], function(response) {
    //response for data
response.on('data', function(chunk) {
    //push output into an array, may simplify future processes
    strArr.push(chunk);
    
});

response.on('end', function() {
    //join the array into a string
    str = strArr.join("");
    //return the string
    console.log(str);
if (index<2){
    index++;
    strArr=[];
    getHTTP(index);
} else {
    
}
});

}).on('error', function(e) {
console.log("Got error: " + e.message);
//index++;
})
}

getHTTP(0)
