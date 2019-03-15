// main page
const accountBtn = element(by.xpath(`//a[@href='/account']`));
const pageTitle = element(by.xpath('//h1'));
// login page
const loginField = element(by.id('loginform-username'));
const passwordField = element(by.id('loginform-password'));
const loginBtn = element(by.xpath(`//button[@name='login-button']`));
const registrationBtn = element(by.xpath(`//a[@href='/account/registration']`));
const helpBlock = element(by.xpath(`//form[@id='login-form']/div[2]/p[@class='help-block help-block-error']`));
// account page
const logoutBtn = element(by.xpath(`//form[@action='/account/logout']/button[@type='submit']`));
// registration page
const registrationLoginField = element(by.id('signupform-username'));
const registrationEmailField = element(by.id('signupform-email'));
const registrationPasswordField = element(by.id('signupform-password'));
const signUpBtn = element(by.xpath(`//button[@name='signup-button']`));
const randomUsername = Math.random().toString(36).substring(7);
const randomPassword = Math.random().toString(36).replace('0.', '');

describe('LogIn tests', () => {
    async function logIn(username, password) {
        await accountBtn.click();
        await loginField.clear().sendKeys(username);
        await passwordField.clear().sendKeys(password);
        await loginBtn.click();
        await browser.wait(async () =>
            await logoutBtn.isPresent() && await logoutBtn.isDisplayed(), 5000, 'Cannot find logout button'
        );
    };

    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('');
    });

    // afterEach(async () => {
    //     await browser.close();
    // });

    it('Test verifies that user can login using valid credentials', async () => {
        // await browser.waitForAngularEnabled(false);
        // await browser.get('');
        await logIn('6546565', 'p77p77');
        expect(await pageTitle.getText()).toContain('Личный кабинет');
    });
    
    it('Test verifies that user can not login using invalid credentials', async () => {
        // await browser.waitForAngularEnabled(false);
        // await browser.get('');
        await accountBtn.click();
        await browser.wait(async () => {
            await loginField.isPresent() && await loginField.isDisplayed(), 5000, 'Cannot find login field'
        })
        await loginField.clear().sendKeys('33dddd33');
        await passwordField.clear().sendKeys('3333ddd');
        await loginBtn.click();
        await browser.wait(async () =>
            await helpBlock.isPresent() && await helpBlock.isDisplayed(), 10000, 'Error message is not shown'
        );
        expect(await helpBlock.getText()).toContain('Некорректный логин или пароль.');
    });
});


describe('Registration test', () => {
    xit('Test verifies that user can create an account and login in it', async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('');
        await accountBtn.click();
        await registrationBtn.click();
        await browser.wait(async () =>
            await signUpBtn.isPresent() && await signUpBtn.isDisplayed(), 5000, 'Cannot find Sign Up button'
        );
        expect(await pageTitle.getText()).toContain('Регистрация');
        
        // Creating new user. 
        await registrationLoginField.clear().sendKeys(randomUsername);
        await registrationEmailField.clear().sendKeys(Math.random().toString(36).substring(7) + '@mail.com');
        await registrationPasswordField.clear().sendKeys(randomPassword);
        // await registrationEmailField.clear().sendKeys(Date.now().toString('MMddyyyyhhmmsstt'));
        // await registrationPasswordField.clear().sendKeys(Date.now().toString('MMddyyyyhhmmsstt'));
        await signUpBtn.click();
        await browser.wait(async () =>
            await accountBtn.isPresent() && await accountBtn.isDisplayed(), 5000, 'Cannot find account button'
        );

        // Logging out from newly created account.
        // !!! trouble with waits
        await browser.sleep(10000);
        await accountBtn.click();
        await browser.sleep(10000);
        // await browser.wait(async () =>
        //     await accountBtn.isPresent() && await accountBtn.isDisplayed(), 5000, 'Cannot find account button'
        // );
        await browser.wait(async () =>
            await logoutBtn.isPresent() && await logoutBtn.isDisplayed(), 5000, 'Cannot find logout button'
        );
        await logoutBtn.click();
        await browser.wait(async () =>
            await accountBtn.isPresent() && await accountBtn.isDisplayed(), 5000, 'Cannot find account button' 
        );
        
        // Logging in new created account (using created random user and password).
        await accountBtn.click();
        await loginField.clear().sendKeys(randomUsername);
        await passwordField.clear().sendKeys(randomPassword);
        await loginBtn.click();
        await browser.wait(async () =>
            await logoutBtn.isPresent() && await logoutBtn.isDisplayed(), 5000, 'Cannot find logout button'
        );
        

    });
});