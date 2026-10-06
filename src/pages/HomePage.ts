import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/drivek\.it/);
    await expect(this.page.locator('body')).toBeVisible();
  }
}