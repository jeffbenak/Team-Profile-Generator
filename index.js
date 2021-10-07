const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./generateHTML');



const employees = [];

const mainQuestion = [
    {
        type: 'list',
        message: 'What would you like to add?',
        choices: ['Intern', 'Engineer', 'Create Team'],
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
// Function that asks the user for manager information immediately when node index.js is ran

function init() {
inquirer.prompt(managerQuestions).then(function(answers){
    const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
    employees.push(manager);
    continuePrompt();

    })
    

}

// Function that continues the prompt after the init function is invoked

function continuePrompt(){
inquirer.prompt(mainQuestion).then(function(answers){
    if (answers.choice === 'Intern') {
        internPrompt();
    }
    else if (answers.choice === 'Engineer') {
        engineerPrompt();
    }
    else if (answers.choice === 'Quit') {
        createTeam();
    }
});
}

// Function that asks the user certain questions for an engineer

function engineerPrompt(){
inquirer.prompt(engineerQuestions).then(function(answers){
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    employees.push(engineer);
    continuePrompt();
    
})

}

// Function that asks the user certain questions for an intern

function internPrompt(){
inquirer.prompt(internQuestions).then(function(answers){
    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    employees.push(intern);
    continuePrompt();
    
})

 //Function that will generate the app
}
//  function quitPrompt() {
//      let data = generateHtml(employees);
//      fs.writeFile('index.html', data, function(err){
//          if(err)throw err
//          console.log('file written');
//      })
    
//  }
// Function call to initialize app
init();


let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body> 
</body>
</html>`;


function createTeam(){

for (i = 0; i < employees.length; i++) {
    const employeeCard = generateHtml(employees[i]);
    console.log(employeeCard);
    html += employeeCard;
}
fs.writeFile('index.html', html, function(err){
    if(err)throw err
    console.log('file written');
})
}
