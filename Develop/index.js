// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description for your project:'
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What license did you use, if any?',
            choices: ['MIT', 'Apache', 'GPL', 'BSD 3-clause', 'Mozilla Public License']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile()



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
