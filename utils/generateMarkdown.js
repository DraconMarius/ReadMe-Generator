// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ***
  ## Description
  ${answers.descr}
  ***
  # Table of Contents
  1. [Usage] (#usage)
  2. [License] (#licenes)
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
  ## Contribution
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ***
  ## Tests
  [demo](${answers.test})
  ***
  ## Questions
  **If you have any questions, feel free to contact me at the following:
  [Email](${answers.email})

  [<img src="logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/) 

  [<img src="logo_linkedin_icon_143191.png" alt='linkedin' height='40'>]()  


  [<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/${answers.gitHubUserName}) 

[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_linkedin_icon_143191.png" alt='linkedin' height='40'>](${answers.linkedInURL})  
  [Icon credit @ Anton Kalashnyk](https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/)

`;
}

module.exports = generateMarkdown;
