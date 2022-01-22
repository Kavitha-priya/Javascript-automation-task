const { Given, When, Then} = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const { default: $ } = require('webdriverio/build/commands/browser/$');
const { default: $$ } = require('webdriverio/build/commands/browser/$$');
const LoginPage = require('../pages/login.page');
const ProductPage = require('../pages/product.page');
const AddcartPage = require('../pages/addcart.page');

// var chai = require('chai');
// var chaiWebdriver = require('chai-webdriverio').default;
// chai.use(chaiWebdriver(browser))

Given('the user launched SWAGLABS', async function () {

    await browser.url('https://www.saucedemo.com/');
    //const userName = await $('#user-name');
    //await expect($('#user-name')).toBeDisplayed();
});

Given('logged in using {string} and {string}', async function (username, password) {

    await LoginPage.userNameTextBox.setValue(username);
    await LoginPage.passwordTextBox.setValue(password);
    await LoginPage.loginButton.click();
    await ProductPage.menuButton.waitForDisplayed({ timeout: 3000 });
}); 

Given('changed the filter to {string}', async function (filter) {
    await ProductPage.filterDrpdown.selectByAttribute('value', filter);
});

When('adding an item = {string} to the cart', async function (item) {
    await browser.$('//div[text()="'+item+'"]/../parent::div[@class="inventory_item_label"]/following-sibling::div[1]//button').click();
}); 

Then('item count should be increased by {int} and {string} should be added in Your Cart screen', async function (itemCnt, item) {
     
    await ProductPage.cartLink.click();
    await AddcartPage.cartItem.waitForDisplayed({ timeout: 3000 });
    let items = AddcartPage.cartItem_list;
    expect(items.length == itemCnt);
    expect(browser.$('//div[text()="'+item+'"]/parent::a/following-sibling::div[2]//button')).toBeDisplayed();
    
});

Then('remove an {string} from the cart', async function (item) {
    await browser.$('//div[text()="'+item+'"]/parent::a/following-sibling::div[2]//button').click();
});