// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title',
        name: 'projectTitle'
     },
     {
        type: 'input',
        message: 'Description?',
        name: 'description'
     },
     {
        type: 'input',
        message: 'Installation Instructions',
        name: 'instructions'
     },
     {
        type: 'input',
        message: 'Usage Information',
        name: 'usageInfo'
     },
     {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'contributionGuide'
     },
     {
        type: 'input',
        message: 'Test Instructions',
        name: 'testInstructions'
     },
     {
        type: 'list',
        message: 'License',
        name: 'license',
        choices: ['MIT','Apache','Unlicense']
     },
     {
        type: 'input',
        message: 'GitHub Username',
        name: 'githubUsername'
     },
     {
        type: 'input',
        message: 'Email address',
        name: 'email'
     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data,null ,2), function(err) { 
        console.log(err)
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers)
            writeToFile('./utils/README.md',answers);
        }
    );
}

// Function call to initialize app
init();