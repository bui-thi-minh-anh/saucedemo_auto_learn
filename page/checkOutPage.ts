import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';

export class CheckOutPage extends BasePage {
    // properties
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;

    // constructor
    constructor(page: Page) {
        super(page);
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    }

    // action methods
    async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }
}