import { browser } from '@wdio/globals'
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    
    /**
     * Navigates to the specified URL.
     * @param url - The URL to navigate to
     */
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

    /**
     * Verifies that the current URL contains the specified text.
     * @param urlPart - The text to check for in the URL
     */
    async verifyUrlContains(urlPart: string): Promise<void> {
        await expect(browser).toHaveUrl(new RegExp(urlPart));
    }
}
