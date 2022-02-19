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
     },
     {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'instructions'
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
        choices: ['MIT','Apache','Unlicense']
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
            // writeToFile('./utils/README.md',answers);
            writeToFile('../../Generated-Readme/README.md',answers);
        }
    );
}

// Function call to initialize app
init();