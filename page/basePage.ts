// ============================================================
// Zone 1: Imports
// ============================================================
import { Page, Locator } from '@playwright/test';

export class BasePage {

  // ============================================================
  // Zone 2: Properties
  // ============================================================
  readonly page: Page;

  // ============================================================
  // Zone 3: Constructor
  // ============================================================
  constructor(page: Page) {
    this.page = page;
  }

  // ============================================================
  // Zone 4: Action Methods (dùng chung cho tất cả các page)
  // ============================================================

  /** Điều hướng đến URL bất kỳ */
  async goto(url: string) {
    await this.page.goto(url);
  }

  /** Lấy title của trang hiện tại */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /** Chờ trang load xong */
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }
}