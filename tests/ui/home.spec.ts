import { test } from '../../src/fixtures/testFixtures';

test.describe('DriveK - Home Page', () => {

  test('should load the DriveK homepage', async ({ homePage }) => {
    await homePage.open();
    await homePage.verifyPageLoaded();
  });

});