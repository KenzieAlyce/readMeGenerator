// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'Project Title?',
  },
  {
    type: 'input',
    name: 'place',
    message: 'Where are you from?',
  },
  {
    type: 'input',
    name: 'hobby',
    message: 'What is your favorite hobby?',
  },
  {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  }];

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
