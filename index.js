const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Licenses = require("github-licenses");
const { generateKey } = require("crypto");
const licenseList = ["AFL", "APACHE", "MIT", "OSL", "ECL", "EUPL", "EPL2", "ART", "MSPL", "MPL"];

// Ask user for typical readme information
inquirer
    .prompt([
        {
            // Name
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            // Github Name
            type: 'input',
            message: 'What is your Github name?',
            name: 'username',
        },
        {
            // Email
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            // Project Name
            type: 'input',
            message: 'What is your Project Name?',
            name: 'projectName',
        },
        {
            // Project Description
            type: 'input',
            message: 'Describe your project:',
            name: 'projectDesc',
        },
        {
            // How do you use your program?
            type: 'input',
            message: 'How do you use your program?',
            name: 'usage',
        },
        {
            // How do you install your program?
            type: 'input',
            message: 'How do you use your program?',
            name: 'usage',
        },
        {
            // How can someone contribute to your program?
            type: 'input',
            message: 'How do you use your program?',
            name: 'contribute',
        },
        {
            // How can someone test your program?
            type: 'input',
            message: 'How can someone test your program?',
            name: 'test',
        },
        {
            // Which license would you like to use?
            type: 'list',
            message: 'Which license do you want to use? (Pick one)',
            name: 'license',
            choices: licenseList,
        },
    ])
    .then((response) => {
        console.log(`Success!`);
        generateReadme(response);
    });

// Add license badge (see if npm exists for this)


// Generates license based on user choice
function generateReadme(response) {
    console.log(response);
}
// const licenses = new Licenses(`${name}`, 2022)