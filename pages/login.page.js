const BasePage = require('./base.page')

class LoginPage extends BasePage{
    get userNameTextBox () { return $('#user-name') }
    get passwordTextBox () { return $('#password') }
    get loginButton () { return $('#login-button') }
}

module.exports = new LoginPage();