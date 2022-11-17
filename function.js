// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((previousValue, currentValue) => previousValue.concat(currentValue));

// console.log(flattened); // logs 6
// const family = { sina: 1, hojat: 2, sara: 3 };
// console["log"](family.sina);
// console.log(console)
// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ];

//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       let key = obj[property]
//       console.log(key)
//       if (!acc[key]) {
//         acc[key] = []
//       }
//       acc[key].push(obj)
//       return acc
//     }, {})
//   }

//   let groupedPeople = groupBy(people, 'age')
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   const car1 = new Car('Eagle', 'Talon TSi', 1993);

//   console.log(car1.make);
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   // fs.readFile("./input.csv", (err, data) => {
//   //   res.end(data);
//   // });
//   let createread = fs.createReadStream("./kepler_data.csv");
//   createread.pipe(res)
// });
// server.listen(3000);

// const Stream = require('stream')
// const readableStream = new Stream.Readable({
//   read() {}
// })
// const writableStream = new Stream.Writable()

// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString())
//   next()
// }

// readableStream.pipe(writableStream)

// readableStream.push('hi!')
// readableStream.push('ho!')
// const fs = require("fs");
// const file = fs.createWriteStream("./big.file");

// for (let i = 0; i <= 1e6; i++) {
//   file.write(
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
//   );
// }
// file.end();
// const fs = require("fs");
// const server = require("http").createServer();

// server.on("request", (req, res) => {
//   fs.readFile("./big.file", (err, data) => {
//     if (err) throw err;
//     res.end(data);
//   });
// });
// server.listen(3000);

// server.on("request",function (req,res) {
//   let xcreatread = fs.createReadStream("./big.file")
//   xcreatread.pipe(res)
// })

// server.listen(3000,function() {
//   console.log("listening");
//  });
// let a ={ id: 0, name: "Javad Fathpour" }

// let b = JSON.stringify(a)
// console.log('JSON.stringify(friend)::>',b);
// console.log(JSON.parse(b))
// const {log} = require("console")
// let arr ={}
// log(`arr==>${arr}`);
// log('arr==>',arr);
// var theObject = {name:{firstName:"Mark", lastName:"Bob"}};
// console.log(theObject.toString());
// console.log("" + theObject);
// console.log(JSON.stringify(theObject));
// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// console.log(text);
// console.log(JSON.parse(text));