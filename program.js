var accum=0;
for (var i=2; i<process.argv.length; i++) {
    accum=accum+Number(process.argv[i]);
}
console.log(accum);