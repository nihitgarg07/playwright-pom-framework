import {test,expect} from '../../fixtures/baseTest'
import { AutoComplete } from '../../pages/autoCompletePage'

test("Verify Automplete Functionality",async ({page})=>{

    const autoCompletePage = new AutoComplete(page)
    const expected = await autoCompletePage.searchAndValidateCountry('i','India')
    await expect(expected==`You selected: India`).toBeTruthy()

})