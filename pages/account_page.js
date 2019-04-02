const logoutBtn = element(by.xpath(`//form[@action='/account/logout']/button[@type='submit']`));
const accountBtn = element(by.xpath(`//a[@href='/account']`));

class AccountPage {
    async logOut() {
        await logoutBtn.click();
        await browser.wait(async () =>
            await accountBtn.isPresent() && await accountBtn.isDisplayed(), 5000, 'Cannot find account button' 
        );
    };
};

module.exports = AccountPage;