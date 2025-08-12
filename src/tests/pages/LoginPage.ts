import { Page } from '@playwright/test';

export class LoginPage {
  goto() {
    throw new Error('Method not implemented.');
  }
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private loginButton = 'button[type="submit"]';

  // Methods
  async gotoLoginPage(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await this.page.waitForURL(/dashboard\/index/);
  }
}
