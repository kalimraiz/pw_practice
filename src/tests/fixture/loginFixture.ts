import { test as base, expect, Page } from '@playwright/test';
import path from 'path';

const authFile = path.join(process.cwd(), 'auth.json'); // project-root/auth.json

type LoginFixture = {
  login: () => Promise<Page>;
};

export const test = base.extend<LoginFixture>({
  login: async ({ page }, use) => {
    const doLogin = async () => {
      console.log('Opening URL...');
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      console.log('Entering Username & Password...');
      await page.fill('input[name="username"]', 'Admin');
      await page.fill('input[name="password"]', 'admin123');

      console.log('Clicking Login button...');
      await page.click('button[type="submit"]');

      console.log('Waiting for Dashboard...');
      await expect(page).toHaveURL(/dashboard/);

      console.log('Saving storage state to', authFile);
      await page.context().storageState({ path: authFile });

      return page;
    };

    await use(doLogin);
  },
});

export { expect };
