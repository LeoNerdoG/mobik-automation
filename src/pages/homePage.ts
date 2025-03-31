import { By, WebDriver, WebElement } from 'selenium-webdriver';
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
    await this.driver.findElement(HomePageElements.myAccount).click();
  }
  
  async searchProduct(productName: string): Promise<void> {
    const searchBox = await this.driver.findElement(By.id('small-searchterms'));
    await searchBox.sendKeys(productName);
    const searchButton = await this.driver.findElement(By.css('input[type="submit"]'));
    await searchButton.click();
  }

  async getPageTitle(): Promise<string> {
    return this.driver.getTitle();
  }

  async getWelcomeMessage(): Promise<string> {
      return this.driver.findElement(By.css(".topic-html-content-header")).getText();
  }
}