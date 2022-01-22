const BasePage = require('./base.page')

class AddcartPage extends BasePage{
    get cartItem () { return $('div[class="cart_item"]') }
    get cartItem_list () { return $$('div[class="cart_item"]') }
}

module.exports = new AddcartPage();