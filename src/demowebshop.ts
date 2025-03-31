import { Builder, WebDriver, until, Session } from 'selenium-webdriver';
import { Options, Driver, ServiceBuilder } from 'selenium-webdriver/chrome';
import { strict as assert } from 'assert';
import { HomePage } from './pages/homePage';
import { RegistrationPage } from './pages/registrationPage';
import { LoginPage } from './pages/loginPage';
import { MyAccountPage } from './pages/myAccountPage';
import { HomePageElements } from './elements/homePageElements';

// positive registration test
async function positiveRegistrationTest(driver: WebDriver) {
  const homePage = new HomePage(driver);
  const loginPage = new LoginPage(driver);
  const myAccountPage = new MyAccountPage(driver);
  const registrationPage = new RegistrationPage(driver);
  const randomNumber = getRandomInt(1, 10000);
  const email = `testUser-${randomNumber}@example.com`;

  await homePage.navigateTo();
  await homePage.clickRegisterLink();

  await registrationPage.enterFirstName('Test');
  await registrationPage.enterLastName('User');
  await registrationPage.enterEmail(email);
  await registrationPage.enterPassword('password123');
  await registrationPage.enterConfirmPassword('password123');
  await registrationPage.clickRegisterButton();

  const successMessage = await  registrationPage.getRegistrationResult();
  assert.ok(await successMessage.includes("Your registration completed"));

  await homePage.clickLogoutLink();
  await homePage.clickLoginLink();

  await loginPage.login(email, 'password');
  
  await homePage.clickMyAccountLink();
  myAccountPage.assertLoginSuccess(email);
}

// Negative registration test
async function negativeRegistrationTest(driver: WebDriver) {
  const homePage = new HomePage(driver);
  const registrationPage = new RegistrationPage(driver);
  const randomNumber = getRandomInt(1, 10000);
  const email = `testUser-${randomNumber}@example.com`;

  await homePage.navigateTo();
  await homePage.clickRegisterLink();
  // just click Register button and that's it
  await registrationPage.clickRegisterButton();

  await registrationPage.assertErrorMessages();
}

// Negative registration test - Bad email
async function negativeRegistrationWrongEmailTest(driver: WebDriver) {
  const homePage = new HomePage(driver);
  const registrationPage = new RegistrationPage(driver);

  await driver.wait(until.elementLocated(HomePageElements.registerButton), 10000);
  await homePage.clickRegisterLink();

  await registrationPage.enterFirstName('Test');
  await registrationPage.enterLastName('User');
  await registrationPage.enterEmail("123");
  await registrationPage.enterPassword('password123');
  await registrationPage.enterConfirmPassword('password123');
  await registrationPage.clickRegisterButton();

  await registrationPage.assertWrongEmailMessage();
}

// Negative registration test - Bad password
async function negativeRegistrationPasswordErrorTest(driver: WebDriver) {
  const homePage = new HomePage(driver);
  const registrationPage = new RegistrationPage(driver);
  const randomNumber = getRandomInt(1, 10000);
  const email = `testUser-${randomNumber}@example.com`;

  await homePage.navigateTo();
  await homePage.clickRegisterLink();

  await registrationPage.enterFirstName('Test');
  await registrationPage.enterLastName('User');
  await registrationPage.enterEmail(email);
  await registrationPage.enterPassword('1');
  await registrationPage.enterConfirmPassword('2');
  await registrationPage.clickRegisterButton();

  await registrationPage.assertWrongPasswordMessage();
}

async function main() {
  process.env.SELENIUM_LOGS = 'selenium.log';
  const options = new Options();
  options.addArguments('--headless');
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {;

    await positiveRegistrationTest(driver);
    await negativeRegistrationTest(driver);
    await negativeRegistrationWrongEmailTest(driver);
    await negativeRegistrationPasswordErrorTest(driver);
    await driver.sleep(50000);
    console.log('All tests passed!');
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}   

// helper function for getting random number
function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
    
main();