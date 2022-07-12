function renderLicenseLink(license) {
  if (license === 'MIT') {
    licenseLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === 'GPLv3') {
    licenseLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === 'Apache--2.0') {
    licenseLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === 'ISC') {
    licenseLink = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
}

  function generateMarkdown(data) {
    renderLicenseLink(data.license);
    console.log(licenseLink);
    return `# ${data.title} 
    
  ## Description of Project
  ${data.description}

---

  ## Table Of Contents:
    * [Installation](#installation)
    * [Used](#used)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)

  ---

  ## Installation
  ${data.installation}

  ## Used
  ${data.usage}

  ## Contributions
  ${data.contributing}

  ## Tests
  ${data.tests}

---
 ## Lincense

 Licensed under the ${licenseLink} license.

---

  ## Questions

  * GitHub Profile: https://github.com/${data.username}
  * Email me at: ${data.email}
`
;
  }

module.exports = generateMarkdown;
  