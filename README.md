# Arabian Ways Website - Cypress Test Suite
## *Overview*
This Cypress test suite is designed to automate the testing of the Arabian Ways website. The suite covers various scenarios, including user registration, login, navigation through different pages, interaction with forms, and posting on the feed section.

## *Prerequisites*
Before running the test suite, ensure that you have the following prerequisites:

- Node.js installed on your machine
- Cypress installed globally
    - `npm install -g cypress`

## :fire: *Running the Tests*
To run the tests, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open a terminal and run `npm install` to install the required dependencies.
4. Run `npm run cypress:open` to open the Cypress Test Runner.
5. In the Cypress Test Runner, click on the test file (`arabian_ways_spec.js`) to execute the tests.

## *Test Cases*
1. Signup Page
2. Signin Page
3. AboutUs Page
4. Blog Page
5. Feed Page
6. Market Page
7. ScrolltoQuestion Page
8. User Page

## *Important Notes*
- The test suite is designed to be modular and readable.
- Ensure a stable internet connection while running the tests.
- Some test scenarios involve waiting for specific elements to appear. Adjust wait times as needed.
