class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('input[name="email"]');
      this.passwordInput = page.locator('input[name="password"]');
      this.loginBTN = page.getByRole('button', { name: 'Sign In', exact: true });
    }
  
    async enterUsername(username) {
      await this.usernameInput.fill(username); // ✅ ใช้ .fill() บน locator
    }
  
    async enterPassword(password) {
      await this.passwordInput.fill(password);
    }
  
    async clickLogin() {
      await this.loginBTN.click(); // ✅ ใช้ .click() บน locator
    }
  
    async login(username, password) {
      await this.enterUsername(username);
      await this.enterPassword(password);
      await this.clickLogin();
    }
   
  async navigateToLogin() {
    await this.page.goto('/login');
  }

  }
  
  module.exports = { LoginPage };
  