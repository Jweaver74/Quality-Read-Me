const licenseArr = ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"];

//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseArr[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }else if (license===licenseArr[1]) {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";  
  }else if (license===licenseArr[2]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }else if (license===licenseArr[3]) {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }else if (license===licenseArr[4]) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]) {
    return "https://opensource.org/licenses/MIT";
  }else if (license===licenseArr[1]) {
    return "https://opensource.org/licenses/Apache-2.0";  
  }else if (license===licenseArr[2]) {
    return "https://www.gnu.org/licenses/gpl-3.0";
  }else if (license===licenseArr[3]) {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }else if (license===licenseArr[4]) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArr[0]) {
    return "This project is licensed under the MIT license.";
  }else if (license===licenseArr[1]) {
    return "This project is licensed under the Apache 2.0 license.";  
  }else if (license===licenseArr[2]) {
    return "This project is licensed under the GPL 3.0 license.";
  }else if (license===licenseArr[3]) {
    return "This project is licensed under the BSD 3 license.";
  }else if (license===licenseArr[4]) {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  *[license](#license)

  *[title](#title)

  *[usage](#usage)

  *[livelink](#livelink)

  *[description](#description)

  *[installation](#installation)

  *[tests](#tests)

  *[contributing](#contributing)

  *[challenge](#challenge)

  *[github](#github)

  *[email](#email)

  ## License
  [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}


  ## Title
  ${data.title}


  ## Usage
  ${data.usage}

  ## Live Link
  ${data.livelink}


  ## Description
  ${data.description}


  ## Installation
  ${data.installation}


  ## Tests
  ${data.tests}


  ## Contributing
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ${data.contributing}


  ## Challenge
  ${data.challenge}


  ## GitHub
  ${data.github}


  ## Email
  ${data.email}


  ## Questions
  If you have any questions, please contact me at [Jason Weaver](Jamaweaver@yahoo.com) or visit my GitHub page at [Jweaver74](https://github.com/Jweaver74)

`;
}

module.exports = generateMarkdown;
