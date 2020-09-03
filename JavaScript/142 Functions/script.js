// function sayHi() {
//     console.log("Hello!");
//     console.log("Goodbue!");
// }

// sayHi();

// function square (num) {
//     console.log(num * num);
//     return num * num;
// }

// square(3);
// square(5);
// square(6);

// console.log("The square is " + square(6));

// function sayHello(name) {
//     console.log("Hello There " + name + "!")
// }

// sayHello("Rusty");


// //Capitalize
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var city = "paris";
// var capital = capitalize(city);

// console.log(capital);


function isEven(num) {
    if (num % 2 === 0) {
        return "true";
    }
    else return "false";
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial (num) {
    var r = 1;
    for (var i=2; i<=num; i++) {
        r*=i;
        // console.log(num);
    }
    return r;
}

console.log("Factorial of 10 is " + factorial(3));
// factorial(2);
// factorial(10);
// factorial(0);

console.log("Kebab to Snake Function");

function kebabToSnake(str) {
    return str.replace (/-/g, "_");
}

w1 = "Hello-world ";
w2 = "dong-are-awesome ";
w3 = "blah ";

console.log(w1 + kebabToSnake(w1));
console.log(w2 + kebabToSnake(w2));
console.log(w3 + kebabToSnake(w3));












