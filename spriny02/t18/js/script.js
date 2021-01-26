
function sortEvenOdd(arr){
   return arr.sort(function(n, m){
      return n % 2 - m % 2 || n - m 
   })
}
const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
console.log(arr);