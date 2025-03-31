import { By } from 'selenium-webdriver';

export const HomePageElements = {
    registerButton: By.xpath("//a[text()='Register']"),
    logoutButton: By.xpath("//a[text()='Log out']"),
    loginButton: By.xpath("//a[text()='Log in']"),
    myAccount: By.xpath("//a[text()='My account']")
}