let unsorted = ['5845751254854882728487857858551', '1684515', '54', '7327', '0']
function bigSorting(unsorted) {

  unsorted.sort(function (a, b) { return a - b; })
  return unsorted;

  /*let arr = [], sorted = [];
  for(let i = 0; i < unsorted.length; i++){
    arr.push(Math.floor(+unsorted[i]));
  }
  let temp;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  arr.map(String);
  return(arr);*/
}
alert(bigSorting(unsorted));