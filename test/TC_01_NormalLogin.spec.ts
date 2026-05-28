// ============================================================
// TC_01: Normal Login
// ============================================================
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/loginPage';
import { InventoryPage } from '../page/InventoryPage';

test.describe('TC_01 - Normal Login', () => {

  test('TC_01_01 - Login thành công với tài khoản hợp lệ', async ({ page }) => {
    const loginPage     = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Pre-condition: Mở trang login
    await loginPage.open();

    // Steps
    await loginPage.login('standard_user', 'secret_sauce');

    // Expected Result
    await expect(page).toHaveURL(/inventory/);
    const count = await inventoryPage.getProductCount();
    expect(count).toBe(6);
  });

});