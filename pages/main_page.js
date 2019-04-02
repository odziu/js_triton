const accountBtn = element(by.xpath(`//a[@href='/account']`));
const pageTitle = element(by.xpath('//h1'));

class MainPage {
    async open() {
        await browser.waitForAngularEnabled(false);
        await browser.get('');
    };

    async clickOnAccountBtn() {
        await accountBtn.click();
    };
};

module.exports = MainPage;