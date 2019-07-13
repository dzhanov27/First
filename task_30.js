let str = prompt("enter text");

function findLetter(str){
  let arr = str.split(""), k = 0;
  let err = "no duplicate items";
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i] == arr[j]) k++;
    }
    if(k == 1) {
      return arr[i];
    }
    k = 0;
  }
  return err;
}

alert(findLetter(str));