const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project',
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Include instructions for using your project',
  },
  {
    type: 'input',
    name: 'media',
    message: 'Include images or videos of your completed project',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub profile',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },
  {
    type: 'list',
    name: 'license',
    message: "Please choose the license for the project:",
    // Resource: https://choosealicense.com/licenses/
    choices: [
        "GNU GPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
        "BSD 3-Clause"
    ]
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
  
    .then((answers) => {
      const readMe = generateMarkdown(answers);
  writeToFile('README.md', readMe);
    });
  
}
// Function call to initialize app
init();
