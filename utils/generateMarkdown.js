// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'N/A') {
    return " "
  }
  return `![badge](https://img.shields.io/badge/BADGE-${license}-red.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === 'N/A') {
    return " "
  }
  return `![badge](https://img.shields.io/badge/BADGE-${license}-red.svg)`

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'N/A') {
    return " "
  }
  return `![badge](https://img.shields.io/badge/BADGE-${license}-red.svg)`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { description, repoUsage, testRun, dependencies, email, githubUser, title, name, license, tableOfContents } = data;
  return `# ${title}
  ${renderLicenseBadge(license)}

   
  ## Description

 *** ${description} ***

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)

  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Installation
   ${ dependencies }

  ## Usage
   ${repoUsage}

  ## License
   ${ license }

  ## Contributing
   ${tableOfContents}

  ## Tests
   ${ testRun }

  ## Questions
   ${name} 


   ${email} 

   
   https://github.com/${githubUser}/README-Generator 

   https://drive.google.com/file/d/1dTR1-IIgAq7Gag1tGg7iVaWeG8YQd8CV/view
  

  

`;
}

module.exports = generateMarkdown;
