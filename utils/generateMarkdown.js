// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ projectTitle, description, techUsed, installation, usageInfo, contributionGuide, testInstructions, license, githubUsername, email, screenshots }) =>
`# ${projectTitle}

## <a id='license' href='#readme-badges'><img id='usage' src='https://i.imgur.com/DXcZdGv.png' style='height: 40px'></a> [![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## <a href='#readme-badges'><img id='usage' src='https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/table-of-context.png?raw=true' style='height: 40px'></a>
* [Description](#description)
* [Technolgies Used](#technolgies-used)
* [Installation Instructions](#installation-instructions)
* [Usage Info](#usage-info)
* [Contribution Guide](#contribution-guide)
* [Instructions for testing](#instructions-for-testing)
* [Questions](#questions)
* [Screenshots](#screenshots) 

## <a id='description' href='#readme-badges'><img id='usage' src='https://i.imgur.com/LJ1S6wB.png' style='height: 40px'></a>
${description}

## <a id='technolgies-used' href='#readme-badges'><img id='usage' src='https://i.imgur.com/ykBU02c.png' style='height: 40px'></a>
${techUsed}

## <a id='installation-instructions' href='#readme-badges'><img id='usage' src='https://i.imgur.com/ucpcjWg.png' style='height: 40px'></a>
${installation}

## <a id='usage-info' href='#readme-badges'><img id='usage' src='https://i.imgur.com/erC9rgJ.png' style='height: 40px'></a>
${usageInfo}

## <a id='contribution-guide' href='#readme-badges'><img id='usage' src='https://i.imgur.com/ZtAN77x.png' style='height: 35px'></a>
${contributionGuide}

## <a id='instructions-for-testing'  href='#readme-badges'><img id='usage' src='https://i.imgur.com/7jEx40O.png' style='height: 40px'></a>
${testInstructions}

## <a id='screenshots' href='#readme-badges'><img id='usage' src='https://i.imgur.com/WaoO6zA.png' style='height: 40px'></a>
${screenshots}

## <a href='#readme-badges'><img id='usage' src='https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/questions-alt.png?raw=true' style='height: 40px'></a>
If you have questions, you can either open a issue in my Github repository <br>
GitHub Username: ${githubUsername} <br>
Or you can send me an email directly <br>
Email: ${email}
`;

module.exports = generateMarkdown;
