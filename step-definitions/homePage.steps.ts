import { Given, When, Then } from '@wdio/cucumber-framework';
import { HomePage } from '../pages/OrangeHRM/home.page';

const homePage = new HomePage();

//Home Page
Then(/^I should see the OrangeHRM home page$/, async () => {
   await homePage.assertIsOnHomepage();
});