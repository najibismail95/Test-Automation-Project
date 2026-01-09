import { browser } from '@wdio/globals'
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    
    async navigateToUrl (url: string): Promise<void> {
        await browser.url(url);
    }
}
