"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const loginPageElements_1 = require("../elements/loginPageElements");
class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }
    async login(email, password) {
        await this.driver.findElement(loginPageElements_1.LoginPageElements.emailField).sendKeys(email);
        await this.driver.findElement(loginPageElements_1.LoginPageElements.passwordField).sendKeys(password);
        await this.driver.findElement(loginPageElements_1.LoginPageElements.loginButton).click();
    }
}
exports.LoginPage = LoginPage;
