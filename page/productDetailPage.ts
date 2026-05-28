import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';

export class ProductDetailPage extends BasePage {
    // properties
    readonly addToCartButton: Locator;
    readonly removeFromCartButton: Locator;
    readonly backToProductsButton: Locator;

    // constructor
    constructor(page: Page) {
        super(page);
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.removeFromCartButton = page.getByRole('button', { name: 'Remove' });
        this.backToProductsButton = page.getByRole('button', { name: 'Back to products' });
    }

    // action methods
    async clickAddToCart() {
        await this.addToCartButton.click();
    }

    async clickRemoveFromCart() {
        await this.removeFromCartButton.click();
    }

    async clickBackToProducts() {
        await this.backToProductsButton.click();
    }
}