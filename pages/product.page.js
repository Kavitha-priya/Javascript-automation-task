const BasePage = require('./base.page')

class ProductPage extends BasePage{
    get menuButton () { return $('#react-burger-menu-btn') }
    get filterDrpdown () { return $('select[class="product_sort_container"]') }
    get cartLink () { return $('a[class="shopping_cart_link"]') }
}

module.exports = new ProductPage();