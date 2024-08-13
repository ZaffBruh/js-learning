// array

const myArray = [0, 1, 2, 3, 4, 5, true, "zarif"]
const myHero = ["spiderman", "batman"]

console.log(myArray[0]);
console.log(myHero.length);
console.log(myArray[1]);

//array methods

myArray.push(6)
myArray.push(7)
myArray.pop()
//myArray.unshift(9)
//myArray.shift()

console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));
console.log(myArray.indexOf(1));
console.log(myArray.indexOf(3));

const newArr = myArray.join()

console.log(myArray);
console.log(newArr);

console.log(typeof myArray);
console.log(typeof newArr);

// slice, splice 

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)
console.log("C ", myArray);
console.log(myn2);

//+++++++++++++++++++++++++++++++++++

const marvel_heroes = ["spiderman", "ironman", "thor"]
const dc_heroes = ["superman", "batman", "flash"]
// console.log(marvel_heroes + dc_heroes);

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(dc_heroes);
// console.log(marvel_heroes[1]);

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);

//const all_heroes = marvel_heroes.concat(dc_heroes)
//console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //spread
console.log(all_new_heroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr);

console.log(Array.isArray("zarif"))
console.log(Array.from("zarif"));
console.log(Array.from({name: "zarif"})); //interesting 

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));