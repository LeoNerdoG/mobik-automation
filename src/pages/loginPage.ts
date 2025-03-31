import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { LoginPageElements } from '../elements/loginPageElements';

export class LoginPage {
  private driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async login(email: string, password: string): Promise<void> {
    await this.driver.findElement(LoginPageElements.emailField).sendKeys(email);
    await this.driver.findElement(LoginPageElements.passwordField).sendKeys(password);
    await this.driver.findElement(LoginPageElements.loginButton).click();
  }

  // async enterEmail(email: string): Promise<void> {
  //   const emailInput = await this.driver.findElement(LoginPageElements.emailField);
  //   await emailInput.sendKeys(email);
  // }

  // async enterPassword(password: string): Promise<void> {
  //   const passwordInput = await this.driver.findElement(LoginPageElements.passwordField);
  //   await passwordInput.sendKeys(password);
  // }

  // async clickLoginButton(): Promise<void> {
  //   const loginButton = await this.driver.findElement(By.css('input[value="Log in"]'));
  //   await loginButton.click();
  // }

  // async getLoginErrorMessage(): Promise<string> {
  //   try {
  //     const errorMessage = await this.driver.findElement(By.css(".message-error.validation-summary-errors")).getText();
  //     return errorMessage;
  //   } catch(e){
  //       return "";
  //   }
  // }

  // async getLogoutLink(): Promise<WebElement> {
  //     return this.driver.findElement(By.linkText("Log out"));
  // }

  // async clickLogout(): Promise<void> {
  //     const logoutLink = await this.getLogoutLink();
  //     await logoutLink.click();
  // }

  // async getLoggedInEmail(): Promise<string> {
  //     return this.driver.findElement(By.css(".account")).getText();
  // }
}