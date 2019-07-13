var n = prompt("enter steps"), s = prompt("enter path");

var valleys = function(n, s){
  let lvl = 0;
  let count = 0;
  
  for(var i = 0; i < n; i++) {
    if(s.charAt(i) === "D" && lvl == 0) {
      count++;
      lvl--;
    } else if (s.charAt(i) === "D" && lvl !== 0) {
      lvl--;
    } else if (s.charAt(i) === "U") {
      lvl++;
    }
  }
  return count;
}

alert(valleys(n, s));