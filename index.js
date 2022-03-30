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
        console.log(`Success!`);
        generateReadme(response);
    });

// Add license badge (see if npm exists for this)


// Generates license based on user choice
function generateReadme(response) {
    console.log(response);
    const {name, username, email, project, description, usage, install, contribute, test, license, credit} = response;
    const licenses = new Licenses(`${name}`, 2022);

    let template = `# ${project}
    ## Description
    
    ${description}
    
    ## Table of Contents
    
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [Credits] (#credits)
    - [Contribution] (#contribution)
    - [License] (#license)
    
    ## Installation
    
    ${install}
    
    ## Usage
    This repository can be viewed at the following link: (link)
    
    It should look like the following:
    
    ![Screenshot](./screenshot.PNG)
    
    Installation Instructions: ${install}
    
    ## Credits
    
    ${credit}
    
    ## How to Contribute
    
    ${contribute}
    
    ## Tests
    
    ${test}
    
    ## License
    
    ${license}`;
    
    fs.writeFile(`readme.md`, template, (err) =>
    err ? console.error(err) : console.log(`Readme file created!`)
    );
}
// const licenses = new Licenses(`${name}`, 2022)