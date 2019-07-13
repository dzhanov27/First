var n = prompt("enter arrays lenth"), d = prompt("enter rotation number");

var rotate = function(n, d){
  var arr = [];
  for(var i = 0; i < n; i++){
    arr[i] = arr[i] = Math.round(Math.random() * 100);
  }
  alert(arr);
  var temp;
  for(var i = 0; i < d; i++){
    temp = arr.shift();
    arr.push(temp);
  }
  alert(arr);
}

rotate(n, d);