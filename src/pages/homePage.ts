import { By, WebDriver, WebElement, until } from 'selenium-webdriver';
import { HomePageElements } from '../elements/homePageElements';

export class HomePage {
  private driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async navigateTo(): Promise<void> {
    await this.driver.get('https://demowebshop.tricentis.com/');
  }

  async clickRegisterLink(): Promise<void> {
    const registerLink = await this.driver.findElement(HomePageElements.registerButton);
    await registerLink.click();
  }

  async clickLoginLink(): Promise<void> {
    await this.driver.findElement(HomePageElements.loginButton).click();
  }

  async clickLogoutLink(): Promise<void> {
    await this.driver.findElement(HomePageElements.logoutButton).click();
  }

  async clickMyAccountLink(): Promise<void> {
    // await expect(this.driver.locator(HomePageLocators.myAccount)).toBeVisible();
    await this.driver.wait(until.elementLocated(HomePageElements.myAccount), 10000);
    const myAccountLik = await this.driver.findElement(HomePageElements.myAccount);
    await myAccountLik.click();
  }
}