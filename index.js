#! /usr/bin/env node
import inqurier from "inquirer";
const answer = await inqurier.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "selsect any operater to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
console.log(answer);
// conditonal statement
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select a valid operator to perform operation");
}
