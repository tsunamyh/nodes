const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];
function isHabitablePlanet(planet) {
  return (
    planet[`koi_disposition`] === `CONFIRMED` &&
    planet[`koi_insol`] > 0.36 &&
    planet[`koi_insol`] < 1.11 &&
    planet[`koi_prad`] < 1.6
  );
  // planet.username == "tsunamy"
}
let xparse = parse({ comment: `#`, columns: true });
// xparse.on(`data`, (chunk)=>{
//        console.log(chunk);
// })
//console.log(typeof xparse);
let xcreatReadStream = fs.createReadStream(`kepler_data.csv`);
//process.stdout.write(xcreatReadStream)
xcreatReadStream
  .pipe(xparse)
  .on(`data`, function (data) {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on(`error`, function (err) {
    console.log(err);
  })
  .on(`end`, function () {
    console.log(`${habitablePlanets.length} habitable planet found!`);
    console.log(
      habitablePlanets.map(function (planet) {
        return planet.kepler_name;
      })
    );
    console.log(`Done`);
    //console.log(end);
  });

//const a = [1,2,3]
// let aa = JSON.parse('{ "p" : 5}', (key, value) =>
//   typeof value === 'number'
//     ? value * 2 // return value * 2 for numbers
//     : value     // return everything else unchanged
// );
// console.log(aa);
// let bb = JSON.stringify(aa)
// console.log(bb);
// // { p: 10 }

// let xx = JSON.parse('{"1": 10,"2": 20,"3":{"4": 40, "5": {"6": 60}}}', (key, value) => {
//   //console.log(key); // log the current property name, the last is "".
//   if(typeof value === 'number'){
//     return (value*2)
//   }else{
//     return value   // return the unchanged property value.
//   }

// });
// console.log(xx);
// let yy = JSON.stringify(xx)
// console.log(yy);
// console.log("xx:",xx);

// JSON.parse('{"foo" : 1}');

// JSON.parse('{"foo": 1}');

// 1
// 2
// 4
// 6
// 5
// 3
// ""
