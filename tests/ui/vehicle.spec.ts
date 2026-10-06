import { test } from '../../src/fixtures/testFixtures';

test.describe('DriveK - Vehicle', () => {

  test('should display Dacia Duster information', async ({ vehiclePage }) => {
    await vehiclePage.openDaciaDuster();
    await vehiclePage.verifyVehicleName();
  });

});