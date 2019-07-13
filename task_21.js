/*let names = [];
let arr = names.map(function(item) {return item.toLowerCase()});
let filter = new Set(arr);
let result = [];
for(item of filter){
  item = item.replace(item[0], item[0].toUpperCase())
  result.push(item);
}

alert(result);*/


let arr = ['Sam', 'Joe', 'sam', 'Jim', 'Jane'];
arr = arr.map(elem => elem.toLowerCase());
arr = new Set(arr);
arr = Array.from(arr.values());
arr = arr.map(elem => elem.charAt(0).toUppercase() + elem.slice(1));
alert(arr);
