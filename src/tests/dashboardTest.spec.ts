import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';

test('Dashboard Flow Test', async ({ page }) => 
{
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Step 1: Go to login page
  loginPage.goto();

  // Step 2: Login
  await loginPage.login('Admin', 'Admin123');

  // Step 3: Verify dashboard
  await dashboardPage.verifyWelcomeMessage('Welcome, testuser');
});
