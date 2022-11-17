// Node.js program to demonstrate the	
// readable.pipe() method

// Accessing fs module
var fs = require("fs");
// Create a readable stream
var readable = fs.createReadStream('input.csv');
// Create a writable stream
var writable = fs.createWriteStream('output.csv');
// Calling pipe method
readable.pipe(writable)
    .on(`data`,(data)=>{
       console.log(data.toString())
     })
    .on(`error`,function (err) {
        console.log(err)   
    })
    .on(`end`,function () {
        console.log(`Done`);
        //console.log(end);
    })
console.log("Program Ended");