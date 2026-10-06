import { Page, expect } from '@playwright/test';

export class ComparePage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('https://www.drivek.it/confronta-auto/');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }
}