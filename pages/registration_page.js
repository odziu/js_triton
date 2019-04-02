const registrationLoginField = element(by.id('signupform-username'));
const registrationEmailField = element(by.id('signupform-email'));
const registrationPasswordField = element(by.id('signupform-password'));
const signUpBtn = element(by.xpath(`//button[@name='signup-button']`));
const randomUsername = Math.random().toString(36).substring(7);
const randomPassword = Math.random().toString(36).replace('0.', '');
const accountBtn = element(by.xpath(`//a[@href='/account']`));
const randomUsernameSaved = null;
const randomPasswordSaved = null;

class RegistrationPage {
    async createRandomAccount() {
        await registrationLoginField.clear().sendKeys(randomUsername);
        await registrationEmailField.clear().sendKeys(Math.random().toString(36).substring(7) + '@mail.com');
        await registrationPasswordField.clear().sendKeys(randomPassword);
        //  cannot save constants
        randomUsernameSaved = randomUsername.getText();
        randomPasswordSaved = randomPassword.getText();
        // await registrationEmailField.clear().sendKeys(Date.now().toString('MMddyyyyhhmmsstt'));
        // await registrationPasswordField.clear().sendKeys(Date.now().toString('MMddyyyyhhmmsstt'));
        await signUpBtn.click();
        await browser.wait(async () =>
            await accountBtn.isPresent() && await accountBtn.isDisplayed(), 10000, 'Cannot find account button'
        );
    };

    async loginInRandomAccount() {
        await loginField.clear().sendKeys(randomUsernameSaved);
        await passwordField.clear().sendKeys(randomPasswordSaved);
        await loginBtn.click();
    }
};

module.exports = RegistrationPage;