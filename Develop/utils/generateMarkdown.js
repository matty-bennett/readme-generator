// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'Eclipse') {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[here](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
    return '[here](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'Eclipse') {
    return '[here](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'BSD') {
    return '[here](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'Mozilla') {
    return '[here](https://opensource.org/licenses/MPL-2.0)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ' ';
  }
  return `
  ## License
  This project is licensed under the terms of ${license}. Click ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
  return `# ${projectData.title}
  ${renderLicenseBadge(projectData.license)}
  ## Description
    ${projectData.description}
  ## Table of Contents
  - [Installation](link)
  - [Usage](link)
  - [Contributing](link)
  - [Tests](link)
  - [Questions?](link)
  ## Installation
    ${projectData.installation}
  ## Usage
    ${projectData.usage}
  ${renderLicenseSection(projectData.license)}
  ## Contributing
    ${projectData.contributing}
  ## Tests
    ${projectData.tests}
  ## Questions? Contact me here:
    ${projectData.contact}
    ${projectData.github}
`;
}

module.exports = generateMarkdown;
