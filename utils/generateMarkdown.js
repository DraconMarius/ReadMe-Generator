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
  let githubBadge = `[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/${answers.gitHubUserName})`;

  let linkedInBadge = `[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_linkedin_icon_143191.png" alt='linkedin' height='40'>](${answers.linkedInURL})`;

  let iconCredit = `[Icon credit @ Anton Kalashnyk](https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/)`;

  let license = `***
  ## License
  ${answers.license}`

  let template = `# ${answers.title}
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
  ## Contributing Instructionk
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ***
  ## Tests
  [demo](${answers.testing})
  ***
  ## Questions
  **If you have any questions, feel free to contact me at the following:
  [Email](${answers.email})`;

  if (answers.github) {
    template = template + githubBadge
  };


  return;
} jn



function appendBadge(answers) {
  let githubBadge = `[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/${answers.gitHubUserName})`;

  let linkedInBadge = `[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_linkedin_icon_143191.png" alt='linkedin' height='40'>](${answers.linkedInURL})`;

  let iconCredit = `[Icon credit @ Anton Kalashnyk](https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/)`;
  if (answers.github) {
    fs.appendFile("generated.md", githubBadge, (err) => {
      if (err) throw err;
      console.log("github icon was added on readme")
    })
  } else if (answers.linkedIn) {
    fs.appendFile("generated.md", linkedInBadge, (err) => {
      if (err) throw err;
      console.log("linkedIn icon was added on readme")
    })
  };
  if (answers.github || answers.linkedIn) {
    fs.appendFile("generated.md", iconCredit, (err) => {
      if (err) throw err;
      console.log("icon credit was added to readme")
    });
  } return;
};

module.exports = generateMarkdown;
