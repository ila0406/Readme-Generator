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

[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/table-of-context.png?raw=true" style="height: 40px"></a>
* [Description](#Description)
* [Technolgies Used](#technolgies-used)
* [Installation Instructions](#installation-instructions)
* [Usage Info](#usage-info)
* [Contribution Guide](#contribution-guide)
* [Instructions for testing](#instructions-for-testing)
* [Questions](#questions)
* [Screenshots](#screenshots) 

## Description
## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/about.png?raw=true" style="height: 40px"></a>
${description}

## Technolgies used
## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/built-using.png?raw=true" style="height: 40px"></a>
${techUsed}

## Installation Instructions
## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/installing.png?raw=true" style="height: 40px"></a>
${installation}

## Usage Info
## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/usage.png?raw=true" style="height: 40px"></a>
${usageInfo}

## Contribution Guide
${contributionGuide}

## Instructions for Testing
${testInstructions}

## Screenshots
## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/screenshots.png?raw=true" style="height: 40px"></a>
${screenshots}

## Questions
## <a href="#readme-badges"><img id="usage" src="https://github.com/teamjuli0/readme-badges/blob/main/themes/clean-dark/menu-categories/questions-alt.png?raw=true" style="height: 40px"></a>
GitHub Username: ${githubUsername}
Email: ${email}
`;

module.exports = generateMarkdown;
