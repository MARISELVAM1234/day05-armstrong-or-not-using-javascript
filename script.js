let a = parseInt(prompt("Enter the number"));
let b;
let c = 0;
x = a;
console.log("input :", a);
while(a>0)
{
    last = a %10;
    console.log("print last",last)
    b = last**3;
    c = b + c
    lastDigit = a -last
    a = lastDigit/10
    // a = Math.floor(a/10);
}
if(x == c){
    console.log("print armstrong", x);
}
else{
    console.log("print the number is not in armstrong", x);
}