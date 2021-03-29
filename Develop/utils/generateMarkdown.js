// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
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
    ${}
  ## Usage
    ${}
  ${renderLicenseSection(projectData.license)}
  ## Contributing
    ${}
  ## Tests
    ${}
  ## Questions?
    ${}
`;
}

module.exports = generateMarkdown;
