import { test, expect } from '../tests/fixture/loginFixture'; // ✅ Import from fixture file

test('Login Test', async ({ login }) => 
{
  await login(); // Calls our reusable login method
});

test('Get Dashboard URL', async ({ login }) => {
  const page = await login();
  const dashboardUrl = page.url();
  console.log(`✅ Dashboard URL: ${dashboardUrl}`);
  expect(dashboardUrl).toContain('/dashboard/index');
});