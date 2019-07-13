var str = prompt("enter number");

function revereseNumber(str){
  var arr = str.split("").reverse();
  var newStr = arr.join("");
  return newStr;
}

alert(revereseNumber(str));