//  const FileSystem = require("fs")

// FS.writeFileSync("note.txt","created by Me")

// FileSystem.appendFileSync("note.txt"," And You")
// FileSystem.appendFileSync("note.txt","3 And You")

//  let x = "student"
// //let x = process.argv[2]   // return array containig the command line
// console.log("you are a " + x + " now." );
// console.log(`you are a ${x} now.` );

//  let a = process.argv[2]
//  console.log(a)
// process.argv.forEach(function(a,b) {
//    console.log(`${b}:${a}`); 
// });


///////////////////////////////////////////// 1,2,3.Amir Azimi /////////////////////////////////////////

// console.log(__dirname);
// console.log(__filename);
// let path = require(`path`)
// console.log(`filename: ${path.basename(__dirname)}`);
// console.log(`filename: ${path.basename(__filename)}`);

///////////////////////////////////////////// 4.Amir Azimi /////////////////////////////////////////

// var grab = function(flag){
//   var index = process.argv.indexOf(flag) // اگر در آرایه موجود نباشد ایندکس آف -1 برمیگرداند
//   return (index === -1) ? null : process.argv[index+1]
// }

// var user = grab("--user")
// var greeting = grab("--greeting")

// if (user  && greeting ) {
//    console.log(`Khosh omadi ${user},${greeting}`);
// } else {
//    console.log(`No user Or No greeting`);
// }
////////////////////////////////////////////////// 5 amir Azimi
// let questions = [
// "what`s your name",
// "what`s your fav robby",
// "what`s your preferred programming languege"
// ]
// let answers = []

// function ask(i) {
//    process.stdout.write(`\n\n ${questions[i]}`)
//    process.stdout.write(` =>  `)
// }

// process.stdin.on(`data`, function (data) {
//    answers.push(data.toString().trim())
//    if (answers.length < questions.length ) {
//       ask(answers.length)
//    } else {
//       process.exit()
//    }
//     //process.stdout.write(data.toString().trim())
// })

// process.on(`exit`,function () {
//    process.stdout.write("\n\n")
//    process.stdout.write( `Go ${answers[1]} ${answers[0]} you can learn ${answers[2]} later ` )
//    process.stdout.write("\n\n")
// })
// ask(0)
//////////////////////////////////////// 6.AmirAzimi /////////////////////////////////////////////////////
/*let waitTime    = 10000 
let currentTime = 0
let timerp      = 0
let timeInter   = 100

function precentshow(p){
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(`Loading.... ${p}%`)
}
let interval = setInterval(() => {
    currentTime += timeInter
    timerp = Math.floor((currentTime/waitTime)*100)
    precentshow(timerp)
}, timeInter);

setTimeout(function () {
    clearInterval(interval)
    precentshow(100);
    console.log(`\n Done!`);
}, waitTime)*/
///////////////////////////////////////////7.Amir Azimi
/*const path = require('path');
console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
var address = path.join(__dirname, 'www', 'hojat')
console.log( address );
console.log(path.basename(address));
const util = require('util')
util.log()

const v8 = require('v8')
console.log(v8.getHeapStatistics()); */
/////////////////////////////////////////// 8.AmirAzimi

/*const events   = require('events')
var   emitter  = new events.EventEmitter()
emitter.on("custom", function (message , statuse) {
    console.log(`${message}: ${statuse}`);
} )
emitter.emit("custom","salam", 200 ) */

// const EventEmitter  = require("events").EventEmitter
// const util       = require('util')
// var Person = function (name) {
//     this.name = name
// }

// util.inherits(Person , EventEmitter )
// var hojat =  new Person("Hojat Fathi")
// hojat.on(`speak`, function (said) {
//     console.log(`${this.name}: ${said}`); 
// })
    
// hojat.emit(`speak`,`think before speak`)



 /*const http = require("http")
const { setInterval } = require("timers/promises")
http.get('http://www.google.com', function (res){
    res.on('data', function(data){
        //process.stdout.write(data)
        console.log(data.toString());
    } )
} )*/ 
////class MyEmitter extends EventEmitter {}
//const events = require(`events`)
/* const celebrity = new events();
celebrity.on(`race`, function(result){
    if (result === `win`) {
        console.log(`congratulations`);
   }
})
celebrity.on(`race`, function(result){
    if(result === "lost"){
        console.log(`Boo Nooooo`);
    }
})
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
  });
  
celebrity.emit(`race`,`win`);
celebrity.emit(`race`,`lost`); */

//process.emit("beforexit",0)
//const EventEmitter = require('events');

//class MyEmitter extends EventEmitter {}

// const myEmitter = new EventEmitter();

// myEmitter.on('events', function Esmal () {
//     console.log('an event occurred!');
// });
// console.log(myEmitter._events);
// myEmitter.emit('events');
               
// var obji = {name:`Sara`,last:`fathi`}
// var {name} = obji   // var name = obji.name
               
               
const axios = require('axios');
                 
axios.get("https://www.google.com")
  .then(function (response) {
          console.log(response);
     })  
  .catch(function (err) {
          console.log(err);
   }) 
//    .then(function (){
//           console.log(`222222`);
//         //   throw `str`
//    })
//     .then(function (err) {
//             console.log('err2');
//    })
   console.log(`the end`); 


    // ( async function () {
    //     try{
    //         let response = await axios.get('https://wwwwww.google.com');
    //     //     ////////// ............ in THEN
    //         console.log(`respone`);
    //     }
    //     catch(err){
    //     //     ////////// ............ in CATCH
    //         console.log('err');
    //     }
    //     //     ////////// ............ after THEN & CATCH
    //     console.log('the end');
    //   })();

               
 






























