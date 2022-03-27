const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Licenses = require("github-licenses");
const licenseList = ["AFL", "APACHE", "MIT", "OSL", "ECL", "EUPL", "EPL2", "ART", "MSPL", "MPL"];

// Ask user for typical readme information
// Name
// Github Name
// Email
// Project Name
// Project Description
// How do you install your program?
// How do you use your program?
// How can someone contribute to your program?
// How can someone test your program?
// Which license would you like to use? (See if npm for licenses exists)
// Add license badge (see if npm exists for this)


// Generates license based on user choice
// const licenses = new Licenses(`${}`, 2022)