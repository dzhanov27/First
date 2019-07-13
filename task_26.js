var str = prompt("enter string");

function palindrome(str){
  var arr = str.split("");
  var k = 0;

  for(var i = 0; i < arr.length/2; i++){
    if(arr[i] == arr[arr.length-i-1]) k=0;
    else{
      k++;
      break;
    }
  }
  if(k > 0) return(false);
  else return(true);
}

alert(palindrome(str));