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
}