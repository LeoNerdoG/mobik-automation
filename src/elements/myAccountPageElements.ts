import { By } from 'selenium-webdriver';

export const MyAccountPageElements = {
    myAccountHeader: By.xpath("//h1[text()='My account - Customer info']"),
    myAccountEmail: By.xpath("//input[@id='Email']")
}