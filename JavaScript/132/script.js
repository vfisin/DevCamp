//print general numbers
var num = -10;
console.log("print general numbers");

while(num <= 19) {
    console.log(num);
    num++;
}


//print even numbers
num = 10;
console.log("print even numbers");

while(num <= 40) {
    console.log(num);
    num+=2;
}

//print odd numbers
num = 300;
console.log("print odd numbers");

while(num <= 333) {
    if (num % 2 === 1) {
        console.log(num);
    }
    num++;
}


//printnumbers divided by 5
num = 5;
console.log("printnumbers divided by 5");

while(num <= 50) {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
    num++;
}


