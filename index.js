const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle'
     },
     {
        type: 'input',
        message: 'Please provide a description of what your project does:',
        name: 'description'
     },{
        type: 'input',
        message: 'What technology did you use?',
        name: 'techUsed'
     },
     {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installation'
     },
     {
        type: 'input',
        message: 'Please provide usage information:',
        name: 'usageInfo'
     },
     {
        type: 'input',
        message: 'Please provide contribution guidelines:',
        name: 'contributionGuide'
     },
     {
        type: 'input',
        message: 'Please provide test instructions:',
        name: 'testInstructions'
     },
     {
        type: 'list',
        message: 'Which of the these licenses would you like to use?',
        name: 'license',
        choices: ['MIT','Apache-2.0','ISC','Unlicense']
     },
     {
        type: 'input',
        message: 'What GitHub Username would you like included in the Questions section?',
        name: 'githubUsername'
     },
     {
        type: 'input',
        message: 'What Email address would you like included in the Questions section?',
        name: 'email'
     },
     {
        type: 'input',
        message: 'Would you like to include screenshots?',
        name: 'screenshots'
     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   // fs.writeFile(fileName, JSON.stringify(data,null ,2), function(err) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) { 
        console.log(err)
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers)
            // writeToFile('./utils/README.md',answers);
            writeToFile('../../Generated-Readme/README.md',answers);
        }
    );
}

// Function call to initialize app
init();