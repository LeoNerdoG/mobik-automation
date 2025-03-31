import { By } from 'selenium-webdriver';

export const LoginPageElements = {
    emailField: By.id('Email'),
    passwordField: By.id('Password'),
    loginButton: By.xpath("//input[@value='Log in']")
}
