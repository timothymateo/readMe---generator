function renderLicenseLink(license) {
  if (license === 'MIT') {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === 'GPLv3') {
    licenseLink = `[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  }
  if (license === 'Apache--2.0') {
    licenseLink = `[Apache-2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === 'ISC') {
    licenseLink = `[ISC](https://opensource.org/licenses/ISC)`;
  }
}

  function generateMarkdown(data) {
    renderLicenseLink(data.license);
    console.log(licenseLink);
    return `# ${data.title} 
    ![license-badge](https://img.shields.io/badge/license-${data.license}-blue)
    
  ## Description of Project
  ${data.description}

---

  ## Table of Contents

    * [Installation Process](#Installation-Process)

    * [Used For](#Used-For)

    * [Contributions](#Contributions)

    * [Tests Completed](#Tests-Completed)

    * [License](#License)

    * [Questions](#Questions)

  ---

  ## Installation Process
  ${data.installation}

  ## Used For
  ${data.usage}

  ## Contributions
  ${data.contributing}

  ## Tests Completed
  ${data.tests}

---
 ## Lincense

 Licensed under the ${licenseLink} License.

---

  ## Questions

  * GitHub Profile: https://github.com/${data.username}
  * Email me at: ${data.email}
`
;
  }

module.exports = generateMarkdown;
  