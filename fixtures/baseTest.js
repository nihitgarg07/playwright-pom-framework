import {test as base,expect} from '@playwright/test'
import { BASE_URL } from '../utils/constants';

export const test = base.extend({
    loggedInPage : async({page},use)=>{
    await page.goto(BASE_URL);
    // await loginPage.login('test@mail.com', '1234');
    await use(page);
    }    

})

export { expect };