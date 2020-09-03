var todos = ["Buy"];
var input = prompt('What whould you like to do?')

function listTodos() {
    console.log("**********");
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    }); 
    console.log("**********"); 
}

function newTodos() {
    var newTodo = prompt("Enter New Todo");
    todos.push(newTodo);
}

function delTodos() {
    var index = prompt("Enter index of to-do to delete");
    todos.splice(index, 1);
}



while (input !== "quit") {
    if (input === "list") {
        listTodos();
    }
    else if (input === "new") {
        newTodos();
    }
    else if (input === "delete") {
        delTodos();
    }
    //ask for new input
    var input = prompt('What whould you like to do?')
}

console.log("OF, YOU QUIT THE APP");



