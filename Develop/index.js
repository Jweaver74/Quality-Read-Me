// TODO: Include packages needed for this application
const fs= require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function userInput() {
    return inquirer.prompt([
    {name: "license",
    type: "list",
    message: "select the kind of license you want to use for your project",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {name: "title",
    type: "input",
    message:"What is the title of your project?",
    },
    {name: "usage",
    type: "input",
    message:"Do you have a link to your deployed site? If so please provide it here.",
    },
    {name: "description",
    type: "input",
    message:"What does you project do?",
    },
    {name: "installation",
    type: "input",
    message:"What are the steps required to install your project?",
    },
    {name: "tests",
    type: "input",
    message:"Provide examples on how to run tests.",
    },
    {name: "contributing",
    type: "input",
    message:"Who are the contributors of this project?",
    },
    {name: "challenge",
    type: "input",
    message:"What were some of your challenges?",
    },
    {name: "github",
    type: "input",
    message:"What is your GitHub username?",
    },
    {name: "email",
    type: "input",
    message:"What is your email address?",
    },

    ]);
}

    


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
    (err => err ? console.error(err): console.log(`${fileName}.md has been generated.`))
    )
}

        

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
    
}

// Function call to initialize app
init();
