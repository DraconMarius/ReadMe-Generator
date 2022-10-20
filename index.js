/*
- [ ] Start app in bash / terminal, and be prompted with questions that user will answer
- [ ] A markdown file is then generated. Needs: Description, Table of Contents, 
                            Installation, Usage, License, Contributing, Tests, and Questions
- [ ] Also prompt user for the license and add a badge near the top, also explain in relevent section
- [ ] Asks for username: and add it to the Questions section that is linkable
- [ ] Asks for email address and add contact instructions
- [ ] Clikcable table of content within the README
*/

// TODO: Include packages needed for this application
//inquirer to prompt and capture uesr response
const inquirer = require('inquirer');
const fs = require("fs"); // filesstem, node basic to write / append files
const maths = require("./utils/generateMarkdown"); //getting fn for badges 
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
    "Can you describe your porject for me?",
    "Installation instruction?", "How do you use this thing?",
    "Choose a license, if applicable",
    "Testing?", "How would you like to be contacted if there are concerns about your project?"];
// const contactMe = [""]

const [firstq, secq, thirdq, fourthq, fithq, sixq, sevenq] = questions;
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: firstq,
                name: "title",
            },
            {
                type: "input",
                message: secq,
                name: "descr",
            },
            {
                type: "input",
                message: thirdq,
                name: "install",
            },
            {
                type: "input",
                message: fourthq,
                name: "usage",
            },
            {
                type: "list",
                message: fithq,
                name: "license",
                choices: ["MIT", "ex1", "ex2"],
            },
            {
                type: "input",
                message: sixq,
                name: "testing",
            },
            {
                type: "checkbox",
                message: sevenq,
                name: "contactMe",
                choices: ["email", "twitter", "linkedIn", "gitHub", "pigeonMail(TM)"],
            },
        ]).then((data) => {
            console.log(data);
        })
};
// Function call to initialize app
init();

