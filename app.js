const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const teamArray = [];


const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the manager?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an ID!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the manager?',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the manager?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])

        .then(managerInput => {
            const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber);
            teamArray.push(manager);
            addEmployee();
        })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
        }])
        .then(userChoice => {
            switch (userChoice.role) {
                case 'Engineer':
                    promptEngineer();
                    break;
                case 'Intern':
                    promptIntern();
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log('add a New Engineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the engineer?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an ID!')
                    return false;
                } else {
                    return true;
                }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the engineer?',
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log('Please enter a valid email!')
                return false;
            }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'What is the github username of the engineer?',
    validate: nameInput => {
        if (nameInput) {
            return true;
            } else {
                console.log('Please enter a github username!')
                return false;
            }
}
}
]).then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamArray.push(engineer);
    addEmployee();
})
};

const promptIntern = () => {
    console.log('add a New Intern');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                    } else {
                        console.log('Please enter a name!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of the intern?',
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log('Please enter an ID!')
                        return false;
                        } else {
                            return true;
                        }
                    }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the intern?',
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                        } else {
                            console.log('Please enter a valid email!')
                            return false;
                        }
                    }
            },
            {
                type: 'input',
                name:'school',
                message: 'What school does the intern attend?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                        } else {
                            console.log('Please enter a school!')
                            return false;
                        }
                    }
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
            addEmployee();
        })
    };

    const buildTeam = () => {
        fs.writeFile('./dist/index.html', generateHTML(teamArray), err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Your team has been created!');
            }
        });
    };
    addManager();