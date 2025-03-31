import { By } from 'selenium-webdriver';

export const RegisterPageElements = {
    genderMale: By.xpath("//input[@id='gender-male']"),
    genderFemale: By.xpath("//input[@id='gender-female']"),
    firstName: By.xpath("//input[@name='FirstName']"),
    lastName: By.xpath("//input[@name='LastName']"),
    email: By.xpath("//input[@name='Email']"),
    password: By.xpath("//input[@name='Password']"),
    confirmPassword: By.xpath("//input[@name='ConfirmPassword']"),
    registrationButton: By.xpath("//input[@id='register-button']"),

    // success and error messages
    successMessage: By.xpath("//div[@class='result']"),
    continueButton: By.xpath("//input[@value='Continue']"),
    wrongEmailMessage: By.xpath("//span[text()='Wrong email']"),
    passwordErrorMessage: By.xpath("//span[@for='Password']"),
    confirmPasswordMessage: By.xpath("//span[@for='ConfirmPassword']"),
    firstNameErrorMessage: By.xpath("//span[@for='FirstName']"),
    lastNameErrorMessage: By.xpath("//span[@for='LastName']"),
    emailErrorMessage: By.xpath("//span[@for='Email']"),
}