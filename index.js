// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "repoUsage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["BSD", 'MIT', 'GPL', 'N/A']
    },
    {
        type: "Input",
        name: "testRun",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "githubUser",
        message: "What is your github username?"
    },
 
];

// THEN a high-quality, professional README.md is generated with the title of 
// my project and sections entitled Description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, and Questions


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(`./readme/${answers.title}.md`, markdown(answers))
        })



}

// Function call to initialize app
init();


// const Qs = [
//     'What command should be run to run tests?',
//     'What does the user need to know about using the repo?',
//     'What does the user need to know about contributing to the repo?'
//   ];