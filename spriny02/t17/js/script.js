let a = prompt ( "Enter your first name");

if (isNaN(a)){
let b = prompt ( "Enter your last name");
if (isNaN(b)){
   a = a[0].toUpperCase() + a.slice(1);
   b = b[0].toUpperCase() + b.slice(1);
   alert(`Hello ${a} ${b}!`);
   console.log(`Hello ${a} ${b}!`);
}else (alert ("Wrong input!"));
}else (alert ("Wrong input!"));
