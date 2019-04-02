'use strict';

const loginField = element(by.id('loginform-username'));
const passwordField = element(by.id('loginform-password'));
const loginBtn = element(by.xpath(`//button[@name='login-button']`));
const logoutBtn = element(by.xpath(`//form[@action='/account/logout']/button[@type='submit']`));
const registrationBtn = element(by.xpath(`//a[@href='/account/registration']`));
const signUpBtn = element(by.xpath(`//button[@name='signup-button']`));
const helpBlock = element(by.xpath(`//form[@id='login-form']/div[2]/p[@class='help-block help-block-error']`));

class LoginPage {
    async logIn(username, password) {
        await loginField.clear().sendKeys(username);
        await passwordField.clear().sendKeys(password);
        await loginBtn.click();
    };

    async clickOnRegistrationBtn() {
        await registrationBtn.click();
        await browser.wait(async () =>
            await signUpBtn.isPresent() && await signUpBtn.isDisplayed(), 5000, 'Cannot find Sign Up button'
        );
    }
};

module.exports = LoginPage;