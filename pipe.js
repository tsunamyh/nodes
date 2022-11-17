const calcTotalWithTax = (pizzaCost) => pizzaCost * 1.13;
const costForTwo = (itemCost) => Math.round((itemCost / 2) * 100) / 100;
function pipe(...args) {
  return function (arg) {
    return args.reduce((value, fun) => fun(value), arg);
  };
}
const splitTotalCost = pipe(calcTotalWithTax, costForTwo);
console.log(
  `$5 pizza (plus tax), would cost ${splitTotalCost(5)} between two people`
); // 2.83
//[].reduce((previosValue,currentValue)=> {},initial) 
console.log(
  [15, 16, 17, 18, 19].reduce(
    (previousValue, currentValue, currentIndex, array) =>
      previousValue + currentValue
    , 10
  )
);
