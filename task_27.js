var str = prompt("enter string");

function alphabet(str){
  var arr = str.split("").sort();
  var newStr = arr.join("");
  return newStr;
}

alert(alphabet(str));