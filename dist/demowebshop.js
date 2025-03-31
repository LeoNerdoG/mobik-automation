"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
const assert_1 = require("assert");
const homePage_1 = require("./pages/homePage");
const registrationPage_1 = require("./pages/registrationPage");
const loginPage_1 = require("./pages/loginPage");
const myAccountPage_1 = require("./pages/myAccountPage");
const homePageElements_1 = require("./elements/homePageElements");
const mocha_1 = require("mocha");
(0, mocha_1.describe)("Demo webshop Registration Tests", function () {
    let driver;
    (0, mocha_1.before)(async function () {
        const options = new chrome_1.Options();
        options.addArguments('--headless');
        const driver = await new selenium_webdriver_1.Builder().forBrowser('chrome').setChromeOptions(options).build();
    });
    // Cleanup: Close browser after tests
    (0, mocha_1.after)(async function () {
        await driver.quit();
    });
    (0, mocha_1.it)("Positive registration test", async function () {
        const homePage = new homePage_1.HomePage(driver);
        const loginPage = new loginPage_1.LoginPage(driver);
        const myAccountPage = new myAccountPage_1.MyAccountPage(driver);
        const registrationPage = new registrationPage_1.RegistrationPage(driver);
        const randomNumber = getRandomInt(1, 10000);
        const email = `testUser-${randomNumber}@example.com`;
        await homePage.navigateTo(driver);
        await homePage.clickRegisterLink();
        await registrationPage.enterFirstName('Test');
        await registrationPage.enterLastName('User');
        await registrationPage.enterEmail(email);
        await registrationPage.enterPassword('password123');
        await registrationPage.enterConfirmPassword('password123');
        await registrationPage.clickRegisterButton();
        const successMessage = await registrationPage.getRegistrationResult();
        assert_1.strict.ok(await successMessage.includes("Your registration completed"));
        await homePage.clickLogoutLink();
        await homePage.clickLoginLink();
        await loginPage.login(email, 'password');
        await homePage.clickMyAccountLink();
        myAccountPage.assertLoginSuccess(email);
        console.log("✅ Positive registration test Passed!");
    });
    (0, mocha_1.it)("Negative registration test", async function () {
        const homePage = new homePage_1.HomePage(driver);
        const registrationPage = new registrationPage_1.RegistrationPage(driver);
        const randomNumber = getRandomInt(1, 10000);
        const email = `testUser-${randomNumber}@example.com`;
        await homePage.navigateTo(driver);
        await homePage.clickRegisterLink();
        // just click Register button and that's it
        await registrationPage.clickRegisterButton();
        await registrationPage.assertErrorMessages();
        console.log("✅ Negative registration test Passed!");
    });
    (0, mocha_1.it)("Negative registration test - bad email", async function () {
        const homePage = new homePage_1.HomePage(driver);
        const registrationPage = new registrationPage_1.RegistrationPage(driver);
        await homePage.navigateTo(driver);
        await homePage.clickRegisterLink();
        await driver.wait(selenium_webdriver_1.until.elementLocated(homePageElements_1.HomePageElements.registerButton), 10000);
        await homePage.clickRegisterLink();
        await registrationPage.enterFirstName('Test');
        await registrationPage.enterLastName('User');
        await registrationPage.enterEmail("123");
        await registrationPage.enterPassword('password123');
        await registrationPage.enterConfirmPassword('password123');
        await registrationPage.clickRegisterButton();
        await registrationPage.assertWrongEmailMessage();
        console.log("✅ Negative registration test - bad email Passed!");
    });
    (0, mocha_1.it)("Negative registration test - bad password", async function () {
        const homePage = new homePage_1.HomePage(driver);
        const registrationPage = new registrationPage_1.RegistrationPage(driver);
        const randomNumber = getRandomInt(1, 10000);
        const email = `testUser-${randomNumber}@example.com`;
        await homePage.navigateTo(driver);
        await homePage.clickRegisterLink();
        await registrationPage.enterFirstName('Test');
        await registrationPage.enterLastName('User');
        await registrationPage.enterEmail(email);
        await registrationPage.enterPassword('1');
        await registrationPage.enterConfirmPassword('2');
        await registrationPage.clickRegisterButton();
        await registrationPage.assertWrongPasswordMessage();
        console.log("✅ Negative registration test - bad password Passed!");
    });
});
// positive registration test
// async function positiveRegistrationTest(driver: WebDriver) {
//   const homePage = new HomePage(driver);
//   const loginPage = new LoginPage(driver);
//   const myAccountPage = new MyAccountPage(driver);
//   const registrationPage = new RegistrationPage(driver);
//   const randomNumber = getRandomInt(1, 10000);
//   const email = `testUser-${randomNumber}@example.com`;
//   await homePage.navigateTo();
//   await homePage.clickRegisterLink();
//   await registrationPage.enterFirstName('Test');
//   await registrationPage.enterLastName('User');
//   await registrationPage.enterEmail(email);
//   await registrationPage.enterPassword('password123');
//   await registrationPage.enterConfirmPassword('password123');
//   await registrationPage.clickRegisterButton();
//   const successMessage = await  registrationPage.getRegistrationResult();
//   assert.ok(await successMessage.includes("Your registration completed"));
//   await homePage.clickLogoutLink();
//   await homePage.clickLoginLink();
//   await loginPage.login(email, 'password');
//   await homePage.clickMyAccountLink();
//   myAccountPage.assertLoginSuccess(email);
// }
// Negative registration test
// async function negativeRegistrationTest(driver: WebDriver) {
//   const homePage = new HomePage(driver);
//   const registrationPage = new RegistrationPage(driver);
//   const randomNumber = getRandomInt(1, 10000);
//   const email = `testUser-${randomNumber}@example.com`;
//   await homePage.navigateTo();
//   await homePage.clickRegisterLink();
//   // just click Register button and that's it
//   await registrationPage.clickRegisterButton();
//   await registrationPage.assertErrorMessages();
// }
// Negative registration test - Bad email
// async function negativeRegistrationWrongEmailTest(driver: WebDriver) {
//   const homePage = new HomePage(driver);
//   const registrationPage = new RegistrationPage(driver);
//   await driver.wait(until.elementLocated(HomePageElements.registerButton), 10000);
//   await homePage.clickRegisterLink();
//   await registrationPage.enterFirstName('Test');
//   await registrationPage.enterLastName('User');
//   await registrationPage.enterEmail("123");
//   await registrationPage.enterPassword('password123');
//   await registrationPage.enterConfirmPassword('password123');
//   await registrationPage.clickRegisterButton();
//   await registrationPage.assertWrongEmailMessage();
// }
// Negative registration test - Bad password
// async function negativeRegistrationPasswordErrorTest(driver: WebDriver) {
//   const homePage = new HomePage(driver);
//   const registrationPage = new RegistrationPage(driver);
//   const randomNumber = getRandomInt(1, 10000);
//   const email = `testUser-${randomNumber}@example.com`;
//   await homePage.navigateTo();
//   await homePage.clickRegisterLink();
//   await registrationPage.enterFirstName('Test');
//   await registrationPage.enterLastName('User');
//   await registrationPage.enterEmail(email);
//   await registrationPage.enterPassword('1');
//   await registrationPage.enterConfirmPassword('2');
//   await registrationPage.clickRegisterButton();
//   await registrationPage.assertWrongPasswordMessage();
// }
// async function main() {
//   // const options = new Options();
//   // options.addArguments('--headless');
//   // const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
//   try {;
//     await positiveRegistrationTest(driver);
//     await negativeRegistrationTest(driver);
//     await negativeRegistrationWrongEmailTest(driver);
//     await negativeRegistrationPasswordErrorTest(driver);
//     await driver.sleep(50000);
//     console.log('All tests passed!');
//   } catch (error) {
//     console.error('Test failed:', error);
//   } finally {
//     await driver.quit();
//   }
// }   
// helper function for getting random number
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
// main();
