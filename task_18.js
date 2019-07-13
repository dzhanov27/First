var s = prompt("enter characters");
function alternatingCharacters(s) {
  var k = 0;

  for(var i = 0; i < s.length; i++){
    if(s[i+1] == s[i]){
      k++;
    }
  }
  alert(k);
}

alternatingCharacters(s);