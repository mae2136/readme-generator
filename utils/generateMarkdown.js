const Licenses = require("github-licenses");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license == "None") {
    return "";
  } else {
    const licenses = new Licenses(`${name}`, 2022);
    return licenses.MIT;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {name, username, email, project, description, usage, install, contribute, test, license, credit} = data;
  let licenseTemplate = renderLicenseSection(license, name);
  // let userlicense = licenses.license
  return `# ${project}
  ## Description
  
  This program was created by ${username}. If you have any questions on how this program works, please reach out to me at ${email}.

  ${description}
  
  ## Table of Contents
  
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Credits] (#credits)
  - [Contributing] (#contributing)
  - [License] (#license)
  
  ## Installation
  
  Installation Instructions: ${install}
  
  ## Usage
  This repository can be viewed at the following link: (link)
  
  It should look like the following:
  
  ![Screenshot](./screenshot.PNG)
  
  How to use the program:
  \`\`\`
  ${usage}
  \`\`\`
      
  ## Contributing
  
  ${contribute}
  
  ## Tests
  
  ${test}

  ## Credits
  
  ${credit}
  
  ## License
  
  ${licenseTemplate}`;
}

module.exports = generateMarkdown;
