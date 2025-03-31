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
        await this.driver.findElement(homePageElements_1.HomePageElements.myAccount).click();
    }
    async searchProduct(productName) {
        const searchBox = await this.driver.findElement(selenium_webdriver_1.By.id('small-searchterms'));
        await searchBox.sendKeys(productName);
        const searchButton = await this.driver.findElement(selenium_webdriver_1.By.css('input[type="submit"]'));
        await searchButton.click();
    }
    async getPageTitle() {
        return this.driver.getTitle();
    }
    async getWelcomeMessage() {
        return this.driver.findElement(selenium_webdriver_1.By.css(".topic-html-content-header")).getText();
    }
}
exports.HomePage = HomePage;
