import { Page, expect } from '@playwright/test';

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private timeMenu = 'xpath=//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a';
  private timesheetHeader = 'xpath=//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6[2]';
  private profileDropdown = 'xpath=//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/i';
  private logoutOption = 'xpath=//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a';

  // Methods
  async verifyDashboard() {
    const url = this.page.url();
    const title = await this.page.title();
    console.log(`✅ Dashboard URL: ${url} | Title: ${title}`);
    expect(url).toContain('/dashboard/index');
  }

  async openTimeMenu() {
    await this.page.waitForTimeout(2000);
    await this.page.click(this.timeMenu);
  }

  async verifyTimesheetHeader(expectedText: string) {
    const headerLocator = this.page.locator(this.timesheetHeader);
    await headerLocator.waitFor({ state: 'visible', timeout: 5000 });
    const headerText = (await headerLocator.textContent())?.trim();
    expect(headerText).toBe(expectedText);
    console.log(`✅ Matched Header Text: "${headerText}"`);
  }

  async logout() {
    await this.page.waitForSelector(this.profileDropdown, { state: 'visible', timeout: 30000 });
    await this.page.click(this.profileDropdown);
    await this.page.waitForSelector(this.logoutOption, { state: 'visible', timeout: 30000 });
    await this.page.click(this.logoutOption);
    console.log('✅ Successfully logged out');
  }
}
