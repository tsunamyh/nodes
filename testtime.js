const {parse} = require('csv-parse')
const fs = require('fs')

const habitablePlanets = []
function isHabitablePlanet(planet) {
    return planet[`koi_disposition`] === `CONFIRMED`
     && planet[`koi_insol`]>0.36 && planet[`koi_insol`]<1.11 
     && planet[`koi_prad`]<1.6 ;
}

let xparse = parse({comment : `#`,columns : true  })
// let i = 0
// xparse.on(`data`, (chunk)=>{
//    do {
//        console.log(chunk);
//        i++
//        console.log(i);
//    } while (i<20);
// })
//console.log(typeof xparse);
let xcreatReadStream = fs.createReadStream(`kepler_data.csv`)
//process.stdout.write(xcreatReadStream) 
//console.log( xcreatReadStream);
xcreatReadStream.pipe(xparse)

xparse.on(`data`,function(data){ 
    if(isHabitablePlanet(data)){
       habitablePlanets.push(data)
   }
})
xparse.on(`error`,function(err) {
   console.log(err);   
})
xparse.on(`end`,function() {
   console.log(`${habitablePlanets.length} habitable planet found!`)
   console.log(`Done`);
   //console.log(end);
})
