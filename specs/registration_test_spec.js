const pageTitle = element(by.xpath('//h1'));
const logoutBtn = element(by.xpath(`//form[@action='/account/logout']/button[@type='submit']`));

const MainPage = require('../pages/main_page.js');
const mainPage = new MainPage();
const LoginPage = require('../pages/login_page.js');
const loginPage = new LoginPage();
const RegistrationPage = require('../pages/registration_page.js');
const registrationPage = new RegistrationPage();
const AccountPage = require('../pages/account_page.js');
const accountPage = new AccountPage();

describe('Registration test', () => {
    xit('Test verifies that user can create an account and login in it', async () => {
        await mainPage.open();
        await mainPage.clickOnAccountBtn();
        await loginPage.clickOnRegistrationBtn();
        expect(await pageTitle.getText()).toContain('Регистрация');
        await registrationPage.createRandomAccount();
        
        // trouble with waits
        await browser.sleep(10000);

        await mainPage.clickOnAccountBtn();
        await browser.wait(async () =>
            await logoutBtn.isPresent() && await logoutBtn.isDisplayed(), 5000, 'Cannot find logout button'
        );
        await accountPage.logOut();
        
        await registrationPage.loginInRandomAccount();
        // // Logging in new created account (using created random user and password).
        // await accountBtn.click();
        // await loginField.clear().sendKeys(randomUsername);
        // await passwordField.clear().sendKeys(randomPassword);
        // await loginBtn.click();
        // await browser.wait(async () =>
        //     await logoutBtn.isPresent() && await logoutBtn.isDisplayed(), 5000, 'Cannot find logout button'
        // );     

    });
});