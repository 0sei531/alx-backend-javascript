# 0x05. NodeJS Basics

## Description
This project focuses on the basics of Node.js and Express.js, with an emphasis on understanding how to execute JavaScript using Node.js, utilize modules, read files, and create HTTP servers. You will also explore using ES6 with Node.js and tools like Nodemon to speed up development.

## Learning Objectives
At the end of this project, you should be able to:
- Run JavaScript using Node.js
- Use Node.js modules
- Read files using Node.js (both synchronously and asynchronously)
- Use the `process` object to access command line arguments and the environment
- Create small HTTP servers using Node.js and Express.js
- Create more advanced routes with Express.js
- Use ES6 with Node.js through Babel
- Use Nodemon for faster development

## Technologies
- JavaScript (ES6)
- Node.js (v12.x.x)
- Express.js
- Mocha (for testing)
- Nodemon (for development)
- Babel (for ES6 transpilation)
- ESLint (for linting)

## Files

- **`0-console.js`**: Contains a function `displayMessage` that prints a message to `STDOUT`.

- **`1-stdin.js`**: A command line program that asks the user for their name and outputs it.

- **`2-read_file.js`**: Contains a function `countStudents` that reads a CSV file synchronously and logs the number of students by field.

- **`3-read_file_async.js`**: Similar to `2-read_file.js` but reads the CSV file asynchronously and returns a Promise.

- **`4-http.js`**: A simple HTTP server using Node's HTTP module that responds with "Hello Holberton School!".

- **`5-http.js`**: An HTTP server that responds with student information or "Hello Holberton School!" depending on the route.

- **`6-http_express.js`**: A simple HTTP server using Express that responds with "Hello Holberton School!".

- **`7-http_express.js`**: An Express server that responds with student information or "Hello Holberton School!" depending on the route.

- **`database.csv`**: A sample CSV file containing student data.

## Setup

### Requirements
- Ubuntu 18.04 LTS
- Node.js (v12.x.x)
- Babel
- ESLint
- Mocha
- Nodemon

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your_username/alx-backend-javascript.git
    ```

2. Navigate to the project directory:
    ```bash
    cd 0x05-Node_JS_basic
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the tests:
    ```bash
    npm run test
    ```

5. To run ESLint checks:
    ```bash
    npm run lint
    ```

## Usage

1. **Run JavaScript with Node.js**
    ```bash
    node 0-main.js
    ```

2. **Run the command line program**
    ```bash
    node 1-stdin.js
    ```

3. **Run the HTTP server with Node.js**
    ```bash
    node 4-http.js
    ```

4. **Run the HTTP server with Express.js**
    ```bash
    node 6-http_express.js
    ```

5. **Run with Nodemon**
    ```bash
    nodemon 6-http_express.js
    ```

## Author
- Your Name

## License
This project is licensed under the MIT License - see the LICENSE file for details.
