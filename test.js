// Node.js program to demonstrate the
fs.createReadStream() //method
// Include fs module
let fs = require('fs');
let i = 0;
// Use fs.createReadStream() method
// to read the file
reader = fs.createReadStream('male_names.txt');
// Read and display the file data on console
 reader.on('data',function(chunk) {
    i++
 	//process.stdout.write(chunk);  //console.log(chunk.toString());
    console.log("toooooooooooool:",chunk.toString().length);     
});
console.log(`i:${i}`);
reader.on(`end`,()=>{
    console.log(`i:${i}`);   
 })
let a = [1,2,3,4,5] , b = [6,7,8,9,10] , c
c = a.join(b)
console.log(c)
let num = [4, 9, 3, 6, 7]
console.log(num.sort((a, b) => {
    console.log('a',a," ","b",b);
    console.log();
    return a - b
}))
