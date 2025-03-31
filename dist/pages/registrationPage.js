"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const registerPageElements_1 = require("../elements/registerPageElements");
class RegistrationPage {
    constructor(driver) {
        this.driver = driver;
    }
    async selectGender(gender) {
        const genderRadio = await this.driver.findElement(selenium_webdriver_1.By.id(gender === 'M' ? 'gender-male' : 'gender-female'));
        await genderRadio.click();
    }
    async enterFirstName(firstName) {
        const firstNameInput = await this.driver.findElement(registerPageElements_1.RegisterPageElements.firstName);
        await firstNameInput.sendKeys(firstName);
    }
    async enterLastName(lastName) {
        const lastNameInput = await this.driver.findElement(registerPageElements_1.RegisterPageElements.lastName);
        await lastNameInput.sendKeys(lastName);
    }
    async enterEmail(email) {
        const emailInput = await this.driver.findElement(registerPageElements_1.RegisterPageElements.email);
        await emailInput.sendKeys(email);
    }
    async enterPassword(password) {
        const passwordInput = await this.driver.findElement(registerPageElements_1.RegisterPageElements.password);
        await passwordInput.sendKeys(password);
    }
    async enterConfirmPassword(confirmPassword) {
        const confirmPasswordInput = await this.driver.findElement(registerPageElements_1.RegisterPageElements.confirmPassword);
        await confirmPasswordInput.sendKeys(confirmPassword);
    }
    async clickRegisterButton() {
        const registerButton = await this.driver.findElement(registerPageElements_1.RegisterPageElements.registrationButton);
        await registerButton.click();
    }
    async getRegistrationResult() {
        const result = await this.driver.findElement(registerPageElements_1.RegisterPageElements.successMessage).getText();
        return result;
    }
    async assertWrongEmailMessage() {
        try {
            const errorMessageEmail = await this.driver.wait(selenium_webdriver_1.until.elementLocated(registerPageElements_1.RegisterPageElements.wrongEmailMessage), 10000).getText();
            return errorMessageEmail.includes('Wrong email');
        }
        catch (error) {
            console.error('Registration assertion error:', error);
            return false;
        }
    }
    async assertWrongPasswordMessage() {
        try {
            const errorMessageEmail = await this.driver.wait(selenium_webdriver_1.until.elementLocated(registerPageElements_1.RegisterPageElements.passwordErrorMessage), 10000).getText();
            return errorMessageEmail.includes('The password should have at least 6 characters.');
        }
        catch (error) {
            console.error('Registration assertion error:', error);
            return false;
        }
    }
    async assertWrongConfirmPasswordMessage() {
        try {
            const errorMessageEmail = await this.driver.wait(selenium_webdriver_1.until.elementLocated(registerPageElements_1.RegisterPageElements.confirmPasswordMessage), 10000).getText();
            return errorMessageEmail.includes('Wrong email');
        }
        catch (error) {
            console.error('Registration assertion error:', error);
            return false;
        }
    }
    async assertErrorMessages() {
        const errorMessageFirstName = await this.driver.wait(selenium_webdriver_1.until.elementLocated(registerPageElements_1.RegisterPageElements.firstNameErrorMessage), 10000).getText();
        return errorMessageFirstName.includes('First name is required.');
        const errorMessageLastName = await this.driver.wait(selenium_webdriver_1.until.elementLocated(registerPageElements_1.RegisterPageElements.lastNameErrorMessage), 10000).getText();
        return errorMessageLastName.includes('Last name is required.');
        const errorMessageEmail = await this.driver.wait(selenium_webdriver_1.until.elementLocated(registerPageElements_1.RegisterPageElements.emailErrorMessage), 10000).getText();
        return errorMessageEmail.includes('Email is required.');
        const errorMessagePassword = await this.driver.wait(selenium_webdriver_1.until.elementLocated(registerPageElements_1.RegisterPageElements.passwordErrorMessage), 10000).getText();
        return errorMessagePassword.includes('Password is required.');
        const errorMessageConfirmPassword = await this.driver.wait(selenium_webdriver_1.until.elementLocated(registerPageElements_1.RegisterPageElements.confirmPasswordMessage), 10000).getText();
        return errorMessageConfirmPassword.includes('Password is required.');
    }
}
exports.RegistrationPage = RegistrationPage;
