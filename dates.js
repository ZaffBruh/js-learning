// Dates 

let myDate = new Date()
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 23, 5, 3)
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let myDateOne = new Date("1-21-2023")
console.log(myDateOne.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myDateOne.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay() +1);
console.log(newDate.getMonth() +1);

//`${newDate.getDay()} and the time`

console.log(newDate.toLocaleString());
console.log(newDate.toLocaleString("default", {weekday:"long"}));