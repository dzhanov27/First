var s = prompt("Enter numbers");
var arr = s.split(" ");
for(var i = 0; i < arr.length; i++) arr[i] = +arr[i];
function second(arr){
  arr.sort();
  var newArr = [];
  newArr.push(arr[1]);
  newArr.push(arr[arr.length-2]);
  return(newArr);
}

alert(second(arr));