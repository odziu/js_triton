const pageTitle = element(by.xpath('//h1'));
const helpBlock = element(by.xpath(`//form[@id='login-form']/div[2]/p[@class='help-block help-block-error']`));
const logoutBtn = element(by.xpath(`//form[@action='/account/logout']/button[@type='submit']`));

const MainPage = require('../pages/main_page.js');
const mainPage = new MainPage();
const LoginPage = require('../pages/login_page.js');
const loginPage = new LoginPage();

describe('LogIn tests', () => {
    
    beforeEach(async () => {
        await mainPage.open();
        await mainPage.clickOnAccountBtn();
    });

    // afterEach(async () => {
    //     await browser.close();
    // });

    fit('Test verifies that user can login using valid credentials', async () => {
        await loginPage.logIn('6546565', 'p77p77');
        await browser.wait(async () =>
            await logoutBtn.isPresent() && await logoutBtn.isDisplayed(), 5000, 'Cannot find logout button'
        );
        expect(await pageTitle.getText()).toContain('Личный кабинет');
    });
    
    it('Test verifies that user can not login using invalid credentials', async () => {
        await loginPage.logIn('33dddd33', '3333ddd');
        await browser.wait(async () =>
            await helpBlock.isPresent() && await helpBlock.isDisplayed(), 10000, 'Error message is not shown'
        );
        expect(await helpBlock.getText()).toContain('Некорректный логин или пароль.');
    });
});