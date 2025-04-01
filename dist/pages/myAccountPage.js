"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAccountPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const myAccountPageElements_1 = require("../elements/myAccountPageElements");
class MyAccountPage {
    constructor(driver) {
        this.driver = driver;
    }
    async assertLoginSuccess(email) {
        try {
            const myAccountHeader = await this.driver.wait(selenium_webdriver_1.until.elementLocated(myAccountPageElements_1.MyAccountPageElements.myAccountEmail), 10000).getText();
            return myAccountHeader.includes(email);
        }
        catch (error) {
            console.error('Login assertion error:', error);
            return false;
        }
    }
}
exports.MyAccountPage = MyAccountPage;
