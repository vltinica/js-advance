"use strict";
const arrayUsers = [
    "Vladimir",
    "Lili",
    "Sofie",
    true,
    22,
    29,
    23,
    "Vladimir",
    "Lili",
    true
];
const setArrayUsers = new Set(arrayUsers);
// console.log(setArrayUsers);
// console.log(setArrayUsers.size);
// console.log(setArrayUsers.has(22));

for (const user of setArrayUsers) {
    console.log(user);
}

console.log([...arrayUsers]);
