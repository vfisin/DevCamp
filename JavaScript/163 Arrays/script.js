var array1 = [1,2,3,4];
var array2 = ["a", "b", "c", "d"];

//Reverse array display
function printReverse (arg) {
    for (i = arg.length - 1; i >= 0; i--) {
        console.log(arg[i]);
    }
}

printReverse(array1);
printReverse(array2);


//Check array uniformity;
function isUniform (arg) {
    var result = true;
    var first = arg[0];
    arg.forEach(function(element) {
        if (first !== element) {
            result = false;
        }
    });
    return result;
}

var array3 = [1,1,1,1];
var array4 = ["a", "a", "a", "a"];

console.log(array3);
console.log(array4);

console.log(isUniform(array3));
console.log(isUniform(array4));

//check type of awway
function checkArrayType (arg) {
    var result = true;
    arg.forEach(function(element) {
        if (typeof element !== "number" ) {
        console.log("This not a numbers array");
        result = false;
        return result;
        }
    }
    )
    return result;
}

    
var array5 = [6,1,1,"1"];
var array6 = [-6,1,1,1];


//summs up every element in array, only accepts number arrays
function sumArray(arg) {
    if (checkArrayType(arg)) {
        var result = 0;
        arg.forEach (function(element) {
            result += element;
        }
        )
    console.log("Sum of array is " + result);
    }
}

sumArray(array5);
sumArray(array6);

var array6 = [-6,1,84,1];


//finds max number of element in arrays, only accepts numbers array
function max(arg) {
    if (checkArrayType(arg)) {
        var result = arg[0];
        arg.forEach (function(element) {
            if (element > result) {
                result = element;
            }
        }
        )
    console.log("Max number in array: " + result);
    return result;
    }
}

max(array6);
max(array5);


// var todos = ["Buy"];
// var input = prompt('What whould you like to do?')

// function listTodos() {
//     console.log("**********");
//     todos.forEach(function(todo, i) {
//         console.log(i + ": " + todo);
//     }); 
//     console.log("**********"); 
// }

// function newTodos() {
//     var newTodo = prompt("Enter New Todo");
//     todos.push(newTodo);
// }

// function delTodos() {
//     var index = prompt("Enter index of to-do to delete");
//     todos.splice(index, 1);
// }



// while (input !== "quit") {
//     if (input === "list") {
//         listTodos();
//     }
//     else if (input === "new") {
//         newTodos();
//     }
//     else if (input === "delete") {
//         delTodos();
//     }
//     //ask for new input
//     var input = prompt('What whould you like to do?')
// }

// console.log("OF, YOU QUIT THE APP");



