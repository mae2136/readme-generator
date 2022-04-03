// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Licenses = require("github-licenses");
const Markdown = require(`./utils/generateMarkdown`);
const licenseList = ["AFL", "APACHE", "MIT", "OSL", "ECL", "EUPL", "EPL2", "ART", "MSPL", "MPL", "None"];

// TODO: Create a function to initialize app
function init() {
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
                name: 'project',
            },
            {
                // Project Description
                type: 'input',
                message: 'Describe your project:',
                name: 'description',
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
                message: 'How do you install your program?',
                name: 'install',
            },
            {
                // How can someone contribute to your program?
                type: 'input',
                message: 'How can someone contribute to your program?',
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
            {
                // Credit
                type: 'input',
                message: 'Would you like to credit anybody or organization?',
                name: 'credit',
            },
        ])
        .then((response) => {
            const readme = Markdown(response);
            writeToFile(readme);
            console.log(`Success!`);
        });
}

// Add license badge (see if npm exists for this)

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data, (err) =>
        err ? console.error(err) : console.log(`README file created!`)
    );
}

// Function call to initialize app
init();