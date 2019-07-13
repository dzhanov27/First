var N = prompt("enter number");

function solution(N){
  var str = (+N).toString( 2 ), 
      zero = 0,
      result = 0;
  
  alert(str);
 
  for (var num of str ){
    if ( num === '0' ){
      zero += 1;
    } else{
      result = Math.max( result, zero );
      zero = 0;
    }
  }
  return result;
}

alert(solution(N));