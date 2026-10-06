import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { VehiclePage } from '../pages/VehiclePage';
import { ComparePage } from '../pages/ComparePage';

type Fixtures = {
  homePage: HomePage;
  vehiclePage: VehiclePage;
  comparePage: ComparePage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  vehiclePage: async ({ page }, use) => {
    await use(new VehiclePage(page));
  },

  comparePage: async ({ page }, use) => {
    await use(new ComparePage(page));
  }
});

export { expect };