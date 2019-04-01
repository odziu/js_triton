'use strict';

const loginField = element(by.id('loginform-username'));
const passwordField = element(by.id('loginform-password'));
const loginBtn = element(by.xpath(`//button[@name='login-button']`));
const registrationBtn = element(by.xpath(`//a[@href='/account/registration']`));
const helpBlock = element(by.xpath(`//form[@id='login-form']/div[2]/p[@class='help-block help-block-error']`));

class LoginPage {
    async open() {
        await browser.waitForAngularEnabled(false);
        await browser.get('');
    };
};

module.exports = LoginPage;