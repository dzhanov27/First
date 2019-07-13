var s = prompt("enter text");
function upperFirst(s){
  var arr = s.split(" "), newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr = arr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  var newS = newArr.join(" ");
  return newS;
}
alert(upperFirst(s));