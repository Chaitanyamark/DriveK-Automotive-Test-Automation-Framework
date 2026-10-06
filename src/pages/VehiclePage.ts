import { Page, expect } from '@playwright/test';

export class VehiclePage {
  constructor(private readonly page: Page) {}

  async openDaciaDuster(): Promise<void> {
    await this.page.goto('https://www.drivek.it/dacia/duster/');
  }

  async verifyVehicleName(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(/Duster/i);
  }
}