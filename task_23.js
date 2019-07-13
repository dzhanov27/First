var a = [], size = prompt("enter array's size"), sum=0;
for(var i = 0; i < size; i++){
  var item = prompt("enter array's item");
  a.push(item);
}
alert(a);
for(var i = 0; i < size; i++){
  a[i] = Math.pow(a[i], 2);
  sum = sum + a[i];
}
alert(a);
alert(`answer ${sum}`);