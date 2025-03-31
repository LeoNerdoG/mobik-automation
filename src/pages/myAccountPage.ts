import { By, WebDriver, until } from 'selenium-webdriver';
import { MyAccountPageElements } from '../elements/myAccountPageElements';

export class MyAccountPage {
  constructor(private driver: WebDriver) {}
async assertLoginSuccess(email: string): Promise<boolean> {
    try {
      const myAccountHeader = await this.driver.wait(until.elementLocated(MyAccountPageElements.myAccountEmail), 10000).getText();
      return myAccountHeader.includes(email);
    } catch (error) {
      console.error('Login assertion error:', error);
      return false;
    }
  }
}