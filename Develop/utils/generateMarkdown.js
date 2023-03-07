// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let yourLicense = ''
  if(license === 'MIT'){
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Apache'){
    yourLicense = `![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)`
  } else if (license === 'GPL'){
    yourLicense = `![License: GPL](https://img.shields.io/badge/License-GPL-red.svg)`
  } else if (license === 'None'){
    yourLicense = ''
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let yourLink = ''
  if (license=== 'Mit' ||  license === "Apache" || license === "GPL") {
    yourLink = `-[License](#license)`
  } else if (license=== 'None') {
    yourLink = ''
  }
 
  return yourLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `# License 
    - User is using the ${license} license`
  }  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.badge)}

  # Description 
  -${data.description}
  


  # Table of Contents 
  -Installation 
  -Contributing
  -Test
  -Questions
  ${renderLicenseLink(data.badge)}

  # Installation
  -${data.installation}

  # Usage 
  -${data.usage}

  # Contributions
  -${data.contributions}

  # Test
  -${data.test}


  # Questions
  -${data.username}
  -${data.email}

  ${renderLicenseSection(data.badge)}

`;
}

module.exports = generateMarkdown;
