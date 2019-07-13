let A = [4, 3, 2, 6, 5], B = [1, 1, 0, 0, 1];

function solution(A, B){
  let result = B.length;
  for(let i = 0; i < B.length; i++){
    if(B[i] == 1){
      for(let j = i+1; j < B.length; j++){
        if(B[j] == 1) break;
        else if (A[i] > A[j]) result--;
        else{
          result--;
          break;
        }
      }
    }
  }
  return result;
}

console.log(solution(A, B));