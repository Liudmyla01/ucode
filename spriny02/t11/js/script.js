var i = 0;
var res1 = "";
do{
    res1 += "" + i;
    i++;
}while( i < 5);

// the second loop
var i = 1;
var res2 = "";
while(i < 5){
    res2 += "" + i;
    i++;
}
alert('do while:' + res1 + '\n' + 'while:' + res2);

