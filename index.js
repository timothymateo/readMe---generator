// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
let fileName = 'README.md';

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
    validate: (answer) => {
      if (answer === '') {
        return console.error('Username not valid');
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: (answer) => {
      if (answer === '') {
        return console.error('Email is not valid');
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    validate: (answer) => {
      if (answer === '') {
        return console.error('Title is required');
      } else {
        return true;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description for your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'List the steps required to install your application',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is your app used? Provide instructions',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: ['MIT', 'GPLv3', 'Apache--2.0', 'ISC'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message:
      'If applicable, describe tests you have run on this project so far',
  },
];

function writeToFile(fileName, answers) {
  markDown = generateMarkdown(answers);
  fs.writeFile(fileName, markDown, (err) => {
    err ? console.error(err) : console.log('readme generated');
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // console.log(answers);
      writeToFile(fileName, answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error(error.message);
      } else {
        console.error(error.message);
      }
    });
}
init();