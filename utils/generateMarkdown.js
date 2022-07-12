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
    
## Description of Projectct
  ${data.description}

---

##  2. Table Of Contents:
    * 1. [Installation](#installation)
    * 2. [Used](#used)
    * 3. [Contributions](#contributions)
    * 4. [Tests](#tests)
    * 5. [License](#license)
    * 6. [Questions](#questions)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

  ---

##  3. <a name='Installation'></a>Installation
  ${data.installation}

##  4. <a name='Used'></a>Used
  ${data.usage}

##  5. <a name='Contributions'></a>Contributions
  ${data.contributing}

##  6. <a name='Tests'></a>Tests
  ${data.tests}

---
##  7. <a name='Lincense'></a>Lincense

 Licensed under the ${licenseLink} license.

---

##  8. <a name='Questions'></a>Questions

  * GitHub Profile: https://github.com/${data.username}
  * Email me at: ${data.email}
`
;
  }

module.exports = generateMarkdown;
  