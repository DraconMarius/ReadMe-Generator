/*
- [X] Start app in bash / terminal, and be prompted with questions that user will answer
- [X] A markdown file is then generated. Needs: Description, Table of Contents, 
                            Installation, Usage, License, Contributing, Tests, and Questions
- [X] Also prompt user for the license and add a badge near the top, also explain in relevent section
- [X] Asks for username: and add it to the Questions section that is linkable
- [X] Asks for email address and add contact instructions
- [X] Clikcable table of content within the README
*/
//conditional for github and linkedin badges






// TODO: Include packages needed for this application
//inquirer to prompt and capture uesr response
const inquirer = require('inquirer');
const fs = require("fs"); // filesstem, node basic to write / append files
// const maths = require("./utils/generateMarkdown"); //getting fn for badges 
// const { validateHeaderName } = require('http');
const generateMarkdown = require('./utils/generateMarkdown');
const appendBadge = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
    "Can you describe your porject for me?",
    "Installation instruction?", "How do you use this thing?", "Who should we credit? List everyone's usernames plz",
    "Choose a license, if applicable",
    "Is there a Demo?", "Do you have a gitHub?", "Do you have linkedIn?", "Please leave an email"];
// const contactMe = [""]
const [firstq, secq, thirdq, fourthq, fithq, sixq, sevenq, eightq, nineq, tenq] = questions;

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
                validate(answer) {
                    if (!answer) {
                        return "*it's gotta have a title*"
                    }
                    return true
                }
            },
            {
                type: "input",
                message: secq,
                name: "descr",
                validate(answer) {
                    if (!answer) {
                        return "*at least a single word plz*"
                    }
                    return true
                }
            },
            {
                type: "input",
                message: thirdq,
                name: "install",
                validate(answer) {
                    if (!answer) {
                        return "*give it an instruction please*"
                    }
                    return true
                }
            },
            {
                type: "input",
                message: fourthq,
                name: "usage",
                validate(answer) {
                    if (!answer) {
                        return "*ELI5* Explain to me like I'm five please!"
                    }
                    return true
                }
            },
            {
                type: "input",
                message: fithq,
                name: "credit",
                validate(answer) {
                    if (!answer) {
                        return "*You gotta at least give credit to yourself*"
                    }
                    return true
                }
            },
            {
                type: "list",
                message: sixq,
                name: "license",
                choices: ["NONE", "Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "GNU:GPLv3(GeneralPublicLicense)", "LesserGPLv3", "MIT", "Mozilla Public License 2.0", "WTFPL", "Eclipse Public License 2.0"],
            },
            {
                type: "input",
                message: sevenq,
                name: "testing",
                default: "NONE"
            },
            {
                type: "confirm",
                message: eightq,
                name: "github",
            },
            {
                type: "input",
                message: "What's your gitHub username?",
                name: "gitHubUserName",
                when: (answers) => {
                    if (answers.github) {
                        return true;
                    }
                },
            },
            {
                type: "confirm",
                message: nineq,
                name: "linkedIn",
            },
            {
                type: "input",
                message: "What's your linkedIn URL?",
                name: "linkedInURL",
                when: (answers) => {
                    if (answers.linkedIn) {
                        return true;// 
                    }
                },
            },
            {
                type: "input",
                message: tenq,
                name: "email",
            },
        ]).then((answers) => {
            console.log(answers);
            const filename = "generated.md";
            const markdown = generateMarkdown(answers);
            fs.writeFile(filename, markdown, (err) =>
                (err) ? console.log("I think I am having a stroke, blame my creator \b" + err) : console.log("sucess??")

            );
        })
};
// Function call to initialize app
init();

