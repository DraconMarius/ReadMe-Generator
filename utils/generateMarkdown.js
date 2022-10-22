// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//feed into generate markdown, and append to title 


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let githubBadge = `
  [<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/${answers.gitHubUserName})`;

  let linkedInBadge = `
  [<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_linkedin_icon_143191.png" alt='linkedin' height='40'>](${answers.linkedInURL})`;

  let iconCredit = `
  [Icon credit @ Anton Kalashnyk](https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/)`;

  // let license = `***
  // ## License
  // ${answers.license}`;

  //seperated into title and body so I can append the badge
  let title = `# ${answers.title}`
  let licenseBadge = `Check out the badges hosted by [shields.io](https://shields.io/)`

  if (answers.license !== "NONE") {
    switch (answers.license) {
      case ("Apache 2.0"):
        title = title + `
            [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case ("BSD 3-Clause"):
        title = title + `
            [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        break;
      case ("BSD 2-Clause"):
        title = title + `
            [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        break;
      case ("GNU:GPLv3(GeneralPublicLicense)"):
        title = title + `
            [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case ("LesserGPLv3"):
        title = title + `
            [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        break;
      case ("MIT"):
        title = title + `
            [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case ("Mozilla Public License 2.0"):
        title = title + `
            [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
      case ("WTFPL"):
        title = title + `
           [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
        break;
      case ("Eclipse Public License 2.0"):
        title = title + `
           [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        break;
    };
  };


  console.log(title + licenseBadge);



  let template = `
  ${title}
  ***
  ## Description
  ${answers.descr}
  ***
  # Table of Contents
  1. [Usage] (#usage)
  2. [License] (#license)
  3. [Credit] (#credit)
  4. [Contribution] (#contribution)
  5. [Testing] (#testing)
  6. [Question] (#questions)
  ***
  ## Usage
  ${answers.usage}
  ***
  ## License
  ${answers.license}
  ***
  ## Credit
  ${answers.credit}
  ***
  ## Contributing Instruction
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ***
  ## Tests
  [demo](${answers.testing})
  ***
  ## Questions
  **If you have any questions, feel free to contact me at the following:
  [Email](${answers.email})`;
  //badges for github and linkedin // and credits if either options was chosen.
  if (answers.github === true) {
    template = template + githubBadge
  };

  if (answers.linkedIn === true) {
    template = template + linkedInBadge
  };

  if (answers.linkedIn || answers.github) {
    template = template + iconCredit
  }


  return (template);
}




//not gonna apppend it after anymore.
// function appendBadge(answers) {
//   let githubBadge = `[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/${answers.gitHubUserName})`;

//   let linkedInBadge = `[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_linkedin_icon_143191.png" alt='linkedin' height='40'>](${answers.linkedInURL})`;

//   let iconCredit = `[Icon credit @ Anton Kalashnyk](https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/)`;
//   if (answers.github) {
//     fs.appendFile("generated.md", githubBadge, (err) => {
//       if (err) throw err;
//       console.log("github icon was added on readme")
//     })
//   } else if (answers.linkedIn) {
//     fs.appendFile("generated.md", linkedInBadge, (err) => {
//       if (err) throw err;
//       console.log("linkedIn icon was added on readme")
//     })
//   };
//   if (answers.github || answers.linkedIn) {
//     fs.appendFile("generated.md", iconCredit, (err) => {
//       if (err) throw err;
//       console.log("icon credit was added to readme")
//     });
//   } return;
// };

module.exports = generateMarkdown;
