import { browser } from '@wdio/globals'
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    
    async navigateToUrl (url: string): Promise<void> {
        await browser.url(url);
    }

    /**
     * Verifies that the elements corresponding to the provided selectors are displayed.
     * @param selectors - An array of selector strings to check
     */
    async verifyElementsDisplayed(selectors: string[]): Promise<void> {
        for (const selector of selectors) {
            const element = await $(selector);
            await element.waitForDisplayed();
            await expect(element).toBeDisplayed();
        }
    }
}
