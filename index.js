import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to add in your Todo? "
        },
        {
            type: "confirm",
            name: "addMore",
            message: " Do you want to add more Todo? "
        },
    ]);
    const { TODO, addMore } = answers;
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("your Todo list is: ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("no Todo found");
}
