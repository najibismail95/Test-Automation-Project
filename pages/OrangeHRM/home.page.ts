import BasePage from "../base.page";

export class HomePage extends BasePage {


    private homePageIdentifier : string = 'div.oxd-topbar-header-title';

    /**
     * Asserts that the user is currently on the Home Page (Dashboard).
     * Checks the URL and the visibility of the header title.
     */
    async assertIsOnHomepage(): Promise<void> {
        await expect(browser).toHaveUrl(/dashboard/i);
        await expect($(this.homePageIdentifier)).toBeDisplayed();
    }

    /**
     * Verifies that the specified dashboard widgets are displayed on the page.
     * @param widgets - A list of widget names to verify
     */
    async verifyDashboardWidgets(...widgets: string[]): Promise<void> {
        const selectors = widgets.map(widget => `p*=${widget}`);
        await this.verifyElementsDisplayed(selectors);
    }

    /**
     * Clicks on a specific item within the Quick Launch widget
     * @param itemName - The visible text of the shortcut (e.g., "Assign Leave")
     */
    async clickQuickLaunchItem(itemName: string): Promise<void> {
        const selector = `button[title="${itemName}"]`;
        const button = await $(selector);
        await button.waitForClickable();
        await button.click();
    }
}