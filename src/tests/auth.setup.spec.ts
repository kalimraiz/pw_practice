import path from 'path';
import { test } from './fixture/loginFixture'; // Import the fixture with login method

test('Create auth.json (one-time)', async ({ login }) => 
{
  const page = await login(); // will login and save auth.json
  console.log('Auth file saved at:', path.join(process.cwd(), 'auth.json'));
});
