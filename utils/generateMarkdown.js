//  Create a function that returns a license badge based on license picked by user
//  Create a function that returns the license link
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![GitHub license](https://img/shields.io/badge/license-${license}-blue.svg)`
  }
return '';
}
  
  //  Create a function to generate markdown for README
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `* [License](#license)`
    } else {
      return '';
    }
  } 

  function renderLicenseSection(license) {
    if(license !== 'None') {
      return `## License
      This readMe is licensed under the ${license}.`
    }
    return '';
  }

  function generateMarkdown(data) {
    return `${data.title}
    ${renderLicenseBadge(data.license)}
  
  ## Title of Project
  ${data.title}
    
  ## Description of Project
  ${data.description}

  ## Installation Process
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests Completed
  ${data.tests}

  [Email](mailto:${data.email})
  
  [GitHub](github.com${data.github})
`;

  }

module.exports = generateMarkdown;
  