//set module requirements from node
var http = require('http');
var fs = require('fs');

//create the http server
var server = http.createServer(function (request, response) {
    //create a readstream pointing to the file in process.argv[3] second argument
    var readStream = fs.createReadStream(process.argv[3]);
    readStream.on('open', function() {
        //if request is ok, send response
        readStream.pipe(response);
    });
    //if request has an error, return error
    readStream.on('error', function(err) {
        response.end(err);
    });
    
})
//set port to listen on as per argument 1 process.argv[2]
server.listen(process.argv[2]);
