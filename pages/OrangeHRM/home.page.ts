import BasePage from "../base.page";

export class HomePage extends BasePage {


private homePageIdentifier : string = 'div.oxd-topbar-header-title';

async assertIsOnHomepage(): Promise<void> {
    await expect(browser).toHaveUrl(/dashboard/i);
    await expect($(this.homePageIdentifier)).toBeDisplayed();
}

}