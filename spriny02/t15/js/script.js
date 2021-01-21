let beg = +prompt(" Write number for beginning a rage");
let end = +prompt("Write number for end a rage");

function checkDivision(beginRange, endRange){
    for( i = beginRange; i <= endRange; i++){
if (i == 1){
    console.log(`${i} "-"`);
}else if (i % 2 == 0 && i % 3 == 0 && i % 10 == 0){
    console.log (`${i} is even, is a multiple of 3, is a multiple of 10`)
 }else if (i % 2 == 0 ){
    console.log(`${i} is even`); 
}else if (i % 3 == 0 ){
    console.log(`${i} is a multiple of 3`)
}else if (i % 10 == 0){
    console.log(`${i} is a multiple of 10`);  
}else (console.log(`${i}`));
    }
}
checkDivision(beg, end);


