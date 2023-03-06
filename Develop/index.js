// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genterateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project',
        validate: (value) => { if (value) { return true } else { return `Please name you project.` } },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description about your project',
        validate: (value) => { if (value) { return true } else { return `Please enter a description of your project.` } },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your projects',
        validate: (value) => { if (value) { return true } else { return `Please give instructions on how to install your project.` } },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
        validate: (value) => { if (value) { return true } else { return `Please provide the usage information of the project.` } },
    },
    {
        type:'input',
        name:'contributions',
        message:'What are the contributing guidlines',
    },
    {
        type:'input',
        name:'test',
        message:'What are the testing instructions for your project',
    },
    {
        type:'checkbox',
        name:'badge',
        message:'What are you asking for your project?',
        choices: ["MIT", "Apache", "GPL", "None"],
    },
    {
        type:'input',
        name:'username',
        message:'What is your Github username?',
        choices: [],
        validate: (value) => { if (value) { return true } else { return `Please enter your Github username.` } },
    },
    {
        type:'input',
        name:'email',
        message:'What is your email',
        choices: [],
        validate: (value) => { if (value) { return true } else { return `Please enter a valid email.` } },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data = genterateMarkdown(data)
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err): console.log('Congratulations you sucessfully created a Readme.md file')
    );
}

// TODO: Create a function to initialize app
function init() {
    filename = "Readme.md"
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data, "data")
        writeToFile(filename, data)
    })
}

// Function call to initialize app
init();
