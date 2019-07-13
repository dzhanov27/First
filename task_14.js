var str = prompt("enter word")
var arr = [];
for(var i = 0; i < str.length; i++){
  arr[i] = str[i];
}
arr.push(str);
var temp = 1;
for (var i = str.length; i > 2; i--){
  arr.push(str.substring(0, str.length-temp))
  temp++;
}
temp = 1;
for (var i = str.length; i > 2; i--){
  arr.push(str.substring(temp, str.length))
  temp++;
}
temp = 1;
for (var i = str.length; i > 2; i--){
  arr.push(str.substring(temp, str.length-temp))
  temp++;
}
arr.sort();
for(var i = 0; i < str.length; i++){
  if(arr[i+1] == arr[i]) 
    arr.splice(i, 1);
}
alert(arr);
