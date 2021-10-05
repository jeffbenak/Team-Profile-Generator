const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employees = [];

const mainQuestion = [
    {
        type: 'list',
        message: 'What do you want to do?',
        choices: ['Intern', 'Engineer', 'Quit'],
        name: 'choice',
    },
];

const managerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee Id?',
        name: 'id',

    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'number',
    },
];

const employeeQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee Id?',
        name: 'id',

    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee Id?',
        name: 'id',

    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your github name?',
        name: 'github',
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee Id?',
        name: 'id',

    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What school are you attending?',
        name: 'school',
    },
];

function init(){
inquirer.prompt(managerQuestions).then(function(answers){
    console.log(answers);
    
})
}
function continuePrompt(){
inquirer.prompt(mainQuestion).then(function(answers){
    console.log(answers);
    if (answers.choice === 'Intern') {
        internPrompt();
    }
    else if (answers.choice === 'Engineer') {
        engineerPrompt();
    }
    else if (answers.choice === 'Quit') {
        
    }
})
}
function engineerPrompt(){
inquirer.prompt(engineerQuestions).then(function(answers){
    console.log(answers);
    
})

}
function internPrompt(){
inquirer.prompt(internQuestions).then(function(answers){
    console.log(answers);
    
})
}
function quitPrompt() {
    
}