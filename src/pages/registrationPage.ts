import { By, WebDriver, until } from 'selenium-webdriver';
import { RegisterPageElements } from '../elements/registerPageElements';
import { expect } from 'chai';

export class RegistrationPage {
  private driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async enterFirstName(firstName: string): Promise<void> {
    const firstNameInput = await this.driver.findElement(RegisterPageElements.firstName);
    await firstNameInput.sendKeys(firstName);
  }

  async enterLastName(lastName: string): Promise<void> {
    const lastNameInput = await this.driver.findElement(RegisterPageElements.lastName);
    await lastNameInput.sendKeys(lastName);
  }

  async enterEmail(email: string): Promise<void> {
    const emailInput = await this.driver.findElement(RegisterPageElements.email);
    await emailInput.sendKeys(email);
  }

  async enterPassword(password: string): Promise<void> {
    const passwordInput = await this.driver.findElement(RegisterPageElements.password);
    await passwordInput.sendKeys(password);
  }

  async enterConfirmPassword(confirmPassword: string): Promise<void> {
    const confirmPasswordInput = await this.driver.findElement(RegisterPageElements.confirmPassword);
    await confirmPasswordInput.sendKeys(confirmPassword);
  }

  async clickRegisterButton(): Promise<void> {
    const registerButton = await this.driver.findElement(RegisterPageElements.registrationButton);
    await registerButton.click();
  }

  async getRegistrationResult(): Promise<string> {
    const result = await this.driver.findElement(RegisterPageElements.successMessage).getText();
    return result;
  }

  async assertWrongEmailMessage(): Promise<boolean> {
    try {
      const errorMessageEmail = await this.driver.wait(until.elementLocated(RegisterPageElements.wrongEmailMessage), 10000).getText();
      return errorMessageEmail.includes('Wrong email');
    } catch (error) {
      console.error('Registration assertion error:', error);
      return false;
    }
  }

  async assertWrongPasswordMessage(): Promise<boolean> {
    try {
      const errorMessageEmail = await this.driver.wait(until.elementLocated(RegisterPageElements.passwordErrorMessage), 10000).getText();
      return errorMessageEmail.includes('The password should have at least 6 characters.');
    } catch (error) {
      console.error('Registration assertion error:', error);
      return false;
    }
  }

  async assertWrongConfirmPasswordMessage(): Promise<boolean> {
    try {
      const errorMessageEmail = await this.driver.wait(until.elementLocated(RegisterPageElements.confirmPasswordMessage), 10000).getText();
      return errorMessageEmail.includes('Wrong email');
    } catch (error) {
      console.error('Registration assertion error:', error);
      return false;
    }
  }

  async asserMissingFirstName(): Promise <boolean> {
    try {
      const errorMessageFirstName = await this.driver.wait(until.elementLocated(RegisterPageElements.firstNameErrorMessage), 10000).getText();
      return errorMessageFirstName.includes('First name is required.');
    } catch (error) {
      console.error('Registration assertion error:', error);
      return false;
    }
  }

  async asserMissingLastName(): Promise <boolean> {
    try {
      const errorMessageLastName = await this.driver.wait(until.elementLocated(RegisterPageElements.lastNameErrorMessage), 10000).getText();
      return errorMessageLastName.includes('Last name is required.');
    } catch (error) {
      console.error('Registration assertion error:', error);
      return false;
    }
  }

  async asserMissingEmail(): Promise <boolean> {
    try {
      const errorMessageMissingEmail = await this.driver.wait(until.elementLocated(RegisterPageElements.emailErrorMessage), 10000).getText();
      return errorMessageMissingEmail.includes('Email is required.');
    } catch (error) {
      console.error('Registration assertion error:', error);
      return false;
    }
  }

  async asserMissingPassword(isPassword: boolean): Promise <boolean> {
    try {
      let locator;
      isPassword ? locator = RegisterPageElements.password : locator = RegisterPageElements.password 
      const errorMessageMissingPassword = await this.driver.wait(until.elementLocated(RegisterPageElements.password), 10000).getText();
      return errorMessageMissingPassword.includes('Password is required.');
    } catch (error) {
      console.error('Registration assertion error:', error);
      return false;
    }
  }

  async asserMissingConfirmPassword(): Promise <boolean> {
    try {
      const errorMessageMissingPassword = await this.driver.wait(until.elementLocated(RegisterPageElements.confirmPassword), 10000).getText();
      return errorMessageMissingPassword.includes('Password is required.');
    } catch (error) {
      console.error('Registration assertion error:', error);
      return false;
    }
  }
}