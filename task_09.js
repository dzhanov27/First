var house = ["Targaryen", "Arryn", "Stark", "Lannister", "Baratheon", "Greyjoy"];
console.log(house[3]);
console.log(house[0]);
console.log(house[house.length - 1]);

console.log(house)
var last = house.pop();
console.log("last element: " + last);
var first = house.shift();
console.log("lfirst element: " + first);
console.log(house)