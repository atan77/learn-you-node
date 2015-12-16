//set requirement for net
var net = require('net') 
//code to handle data from time server
var server = net.createServer(function (socket) {  
//once data received, create variable to house date     
       d = new Date();
//convert date to format required, with zero fill for values less than 10 and remembering that month count starts at 0, needs to end with new line
       s = d.getFullYear() + "-" + fill(d.getMonth()+1)+ "-" + fill(d.getDate()) + " " + fill(d.getHours()) + ":" + fill(d.getMinutes()) + "\n";
//vall variable s when socket is closed
       socket.end(s);
});

//use first argument to specify port to listen to
server.listen(process.argv[2]);

//function to provide logic for zero fill
function fill(n) {
     if (n<10) {
          return "0"+n;
     } else {
          return n;
     }
     }
