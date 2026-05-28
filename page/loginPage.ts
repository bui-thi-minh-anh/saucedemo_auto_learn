// ============================================================
// Zone 1: Imports
// ============================================================
import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {

  // ============================================================
  // Zone 2: Properties
  // ============================================================
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  // ============================================================
  // Zone 3: Constructor
  // ============================================================
  constructor(page: Page) {
    super(page); // Gọi constructor của BasePage
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton   = page.getByRole('button', { name: 'Login' });
    this.errorMessage  = page.locator('[data-test="error"]');
  }

  // ============================================================
  // Zone 4: Action Methods (riêng cho Login)
  // ============================================================

  /** Mở trang login — dùng goto() kế thừa từ BasePage */
  async open() {
    await this.goto('https://www.saucedemo.com/');
    await this.waitForPageLoad();
  }

  /** Điền username và password rồi nhấn Login */
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /** Lấy nội dung error message */
  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.innerText();
  }
}