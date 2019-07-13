var size = +prompt("enter first array's size");
var a = [], b = [], sum = [];
for(var i = 0; i < size; i++){
  var item = +prompt("enter array's item");
  a.push(item);
}

alert(a);

var size = +prompt("enter second array's size");
for(var i = 0; i < size; i++){
  var item = +prompt("enter array's item");
  b.push(item);
}

alert(b);

if(a.length > b.length){
  for(var i = b.length; i < a.length; i++){
    b.push(0);
  }
}

else if(b.length > a.length){
  for(var i = a.length; i < b.length; i++){
    a.push(0);
  }
}

for(var i = 0; i < a.length; i++){
  sum.push(a[i] + b[i]);
}

alert(sum);