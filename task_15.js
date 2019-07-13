var arr = [];
for(var i = 0; i<5; i++){
  arr[i] = +prompt("enter digit");
}

var miniMax = function(arr){
  var max = arr[0], min = arr[0], sum = 0;
  for(var i = 0; i<arr.length; i++){
    if(arr[i] > max)
      max = arr[i];
    if(arr[i] < min)
      min = arr[i];
    sum = sum + arr[i];
  }
  var minSum = sum - max;
  var maxSum = sum - min;
  console.log(minSum, maxSum);
}

miniMax(arr);