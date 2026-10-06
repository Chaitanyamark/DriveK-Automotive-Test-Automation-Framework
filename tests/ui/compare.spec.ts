import { test } from '../../src/fixtures/testFixtures';

test.describe('DriveK - Comparison', () => {

  test('should load the comparison page', async ({ comparePage }) => {
    await comparePage.open();
    await comparePage.verifyPageLoaded();
  });

});