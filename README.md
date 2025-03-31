## Mobik automation task
This is a repository for automation task for Mobik. It is a POC kind of project, where it is demonstrated how to use Selenium with Typescript. 
There are total 4 tests in the repository, which check different registration flows (E2E successful flow, and 3 negative flows). 

### Prerequisites
Before you begin, ensure you have the following things installed on your machine:

* **Node.js and npm (Node Package Manager):** Required for running TypeScript and managing dependencies. You can download them from [nodejs.org](https://nodejs.org/).
* **TypeScript:** Installed globally or locally.
* **A suitable web browser:** in this case Chrome and its corresponding WebDriver (in this case chrome=134.0.6998.166)).
* **Git:** For cloning the repository.

### Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/LeoNerdoG/mobik-automation
    cd mobik-automation
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    This command will install all the necessary packages listed in `package.json`, including Selenium WebDriver, Mochawesome, and TypeScript.

3.  **Install WebDriver:**

    Ensure that the appropriate WebDriver for your browser is installed and configured. In this case we are using Chrome, so go to download ChromeDriver from [chromedriver.chromium.org](https://chromedriver.chromium.org/downloads).
    Place the executable in a directory included in your system's PATH, or specify the webdriver location in your code.

5.  **Compile TypeScript:**

    ```bash
    npx tsc
    ```

    This command will compile the TypeScript files in your `src` directory into JavaScript files in the `dist` directory.

6.  **Run the tests:**

    ```bash
    npm test
    ```

    This command executes the tests using the script defined in your `package.json`. It will typically run the compiled JavaScript files using a test runner and generate a Mochawesome report.

7.  **View the Mochawesome report:**

    After the tests have finished, a Mochawesome report will be generated in the `mochawesome-report` directory. Open `mochawesome-report/index.html` in your web browser to view the report.


### Configuration

* **`tsconfig.json`:** Configures the TypeScript compiler. You can adjust settings like target JavaScript version, module system, and source map generation.
* **`package.json`:** Manages project dependencies and defines npm scripts. You can customize the `test` script to control how your tests are executed.


### Runngin tests on Github Actions
If you create a branch and then push the changes to the repository and create a PR, a github Actions runner will start automatically and run all the necessary things to be able to run the tests. 

