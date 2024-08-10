const name = "zarif"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello, my name is ${name.toUpperCase()} and my repository count is ${repoCount}.`);

let gameName = new String("zarif-game-khan")
console.log(gameName);
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("r"));

const newString = gameName.substring(0,4) //last number does not include
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   zarif   "
console.log(newStringOne.trim());

const url = "https://zariif.com/zarif%20khan"
console.log(url.replace("%20","-"));
console.log(url.includes("zarif"));

console.log(gameName.split("-"));