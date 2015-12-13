//variable to sum arguments passed to function
var accum=0;
//loop to iterate through arguments
for (var i=2; i<process.argv.length; i++) {
    accum=accum+Number(process.argv[i]);
}
console.log(accum);
