// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptUser = () => {
return inquirer
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
            name: 'license',
            message: 'What license did you use, if any?',
            choices: ['MIT', 'Apache', 'Eclipse', 'BSD', 'Mozilla', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the steps required to install your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for how to use your project:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you would like others to contribute to your project, provide guidelines on how to do so:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you wrote tests for your project, explain how to use them here:'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'If anyone has questions relating to your project, provide an email address for them to contact you:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'and your Github username:'
        }
        
    ]);
};
// TODO: Create a function to write README file
promptUser().then(projectData => {
    const projectReadMe = generateMarkdown(projectData);
    
    fs.writeFile('projectREADME.md', projectReadMe, err => {
        if (err) {
            console.log(err);
        } 
        console.log('Success! Checkout projectREADME.md for your newly populated file.');
    })
})


// TODO: Create a function to initialize app


// Function call to initialize app

