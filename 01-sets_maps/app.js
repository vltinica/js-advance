"use strict";

// const wetherMap = new Map();
// wetherMap
//     .set("London", "10")
//     .set("Moscow", "7");

// console.log(wetherMap.get("Moscow"));
// console.log(wetherMap.has("Moscow"));

// console.log(wetherMap.get("not found"));
// console.log(wetherMap.has("not found"));


// console.log(wetherMap.delete("London"));
// wetherMap.clear();
// console.log(wetherMap);


// const arr = [1,2,3];
// wetherMap
//     .set(1,5)
//     .set(true, "yes")
//     .set(arr, "array")
//     .set({a:1}, {b:1})



// console.log(wetherMap.get(arr));
// console.log(wetherMap);
// console.log(wetherMap.size);


//* a fast method of new Map 

const wetherMap = new Map([
    ["London", 10],
    ["Moscow", 7],
])


const wetherObject = {
    london:10,
    moscow:7,
    paris:15
}

console.log(Object.entries(wetherObject));

const wetherMap2 = new Map(Object.entries(wetherObject));
console.log(wetherMap2);
console.log(wetherMap2.size);

