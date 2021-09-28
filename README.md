# Pre requisites
* Node JS: https://nodejs.org/en/

# Project Setup
1. Unzip the ZIP file
2. In the folder with the extracted files run this command:

>npm install

3.  Run the command below to execute the test:

> npm test

# Main files

* Test: https://github.com/marcelodebittencourt/YieldStreet_APIAutomationTest_JS_Axios/blob/master/test/tests.js

* GitHub Actions: https://github.com/marcelodebittencourt/YieldStreet_APIAutomationTest_JS_Axios/blob/master/.github/workflows/main.yml

# Automation Architecture

I added in “.github/workflow” a yml script that executes the tests using GitHub Actions folder for both test levels(UI and API). CI/CD usage, considering that I uploaded UI and API tests in different GitHub repositories, can be implemented locally or in a cloud based service. I would consider using GitHub Actions, adding each GitHub Actions in an integrated script using one job for each test level. So we would have a pipeline were the next stage would be executed only if the previous one was executed successfully, in  this  case, UI would run the tests if the API tests ran ok. 

# Evaluation considerations

* Is this a  complete  solution  that  works? Yes.

* Does it run? Yes. Each test level executes locally and remotely using GitHub Actions in each private repository.

* Does it work as intended? Yes.

* How clean is the code? I used self-explained variable names and a simple code that solved the challenge.

* How well is it architected and documented? The test architecture is pretty simple, so test files have comments where the code lines are more complex. 
