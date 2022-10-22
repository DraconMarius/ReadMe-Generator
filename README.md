# ReadMe-Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
###### Check out the badges hosted by [shields.io](https://shields.io/)
***
A simple command-line applicatoin that prompts user to input details about their project, license, credit, and contact information. It then generate a markdown file that is nicely formatted for the user.

***
- [X] Start app in bash / terminal, and be prompted with questions that user will answer
- [X] A markdown file is then generated. Needs: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- [X] Also prompt user for the license and add a badge near the top, also explain in relevent section
- [X] Asks for username: and add it to the Questions section that is linkable
- [X] Asks for email address and add contact instructions
- [X] Clikcable table of content within the README

***
## Installation & Usage
To install and run this application, please clone / download this repository to your local machine, and **make sure you have `node.js` installed!**

The `package.json` is included in the repo, and you can run the following:

``` bash
npm i
``` 

within the repo's root directory to download all of the required depensies. 

Then you will be ready to start you application by running the following:

``` bash
node index.js
```

***
## Method
I was tasked with creating an interactive command-line application that will prompt user for input when run. First, I focues on compiling the prompts and answers using inquirer to see the type of answers and how it is organized. Once I had my answers formatted, I worked on introducing additional logic using `when:` functionality within inquirer to ask conditional questions based on previous answers. 

After ensuring that I had captured all the information that is required, I then focued on creating a simple markdown template that allows us to start plugging in some of the value that we received from inquirer.js. 

Once I was able to gnereate a markdown file based on user inputs correctly, I then implemeneted a swithc case that would generate a license badge based on user's input and append include it in the generation of the markdown file. 

I also created an additional feature where user is able to provide optional github username or linkedin url that will append the relevant badge/credit within the contact me section.

***
## Demo Links / Media
*(feel free to click on the gif to go to a video demo!)*
[<img src="./demo.gif" alt='click2go2vid'>](https://draconmarius.github.io/WeatherApp/) 

## Technologies Used
> JavaScript
> node.js
> inquirer.js
> shield.io

## License
> MIT

***
## Contact
Feel free to contact me @ the following:

[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/DraconMarius) 

[<img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_linkedin_icon_143191.png" alt='linkedin' height='40'>](https://www.linkedin.com/in/mari-ma-70771585/)  

[Icon credit @ Anton Kalashnyk](https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/)
