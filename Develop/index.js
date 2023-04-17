// TODO: Include packages needed for this application
const fs= require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {name: "license",
    type: "list",
    message: "select the kind of license you want to use for your project",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {name: "title",
    type: "input",
    message:"What is the title of your project?",
    },
    {name: "description",
    type: "input",
    message:"What does you project do",
    },
    {name: "installation",
    type: "input",
    message:"What are the steps required to install your project?",
    },
    {name: "usage",
    type: "input",
    message:"Provide instructions and examples for use.",
    },
    {name: "contributing",
    type: "input",
    message:"If you want other developers to contribute to your project, what are the guidelines?",
    },
    {name: "tests",
    type: "input",
    message:"Provide examples on how to run tests.",
    },
    {name: "github",
    type: "input",
    message:"What is your GitHub username?",
    },
    {name: "email",
    type: "input",
    message:"What is your email address?",
    },
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
