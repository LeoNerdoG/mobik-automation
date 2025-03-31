"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const homePageElements_1 = require("../elements/homePageElements");
class HomePage {
    constructor(driver) {
        this.driver = driver;
    }
    async navigateTo() {
        await this.driver.get('https://demowebshop.tricentis.com/');
    }
    async clickRegisterLink() {
        const registerLink = await this.driver.findElement(homePageElements_1.HomePageElements.registerButton);
        await registerLink.click();
    }
    async clickLoginLink() {
        await this.driver.findElement(homePageElements_1.HomePageElements.loginButton).click();
    }
    async clickLogoutLink() {
        await this.driver.findElement(homePageElements_1.HomePageElements.logoutButton).click();
    }
    async clickMyAccountLink() {
        // await expect(this.driver.locator(HomePageLocators.myAccount)).toBeVisible();
        await this.driver.wait(selenium_webdriver_1.until.elementLocated(homePageElements_1.HomePageElements.myAccount), 10000);
        const myAccountLik = await this.driver.findElement(homePageElements_1.HomePageElements.myAccount);
        await myAccountLik.click();
    }
}
exports.HomePage = HomePage;
