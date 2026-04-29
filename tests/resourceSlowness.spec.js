import {test,expect} from '../fixtures/baseTest'
import { SlownessPage } from '../pages/slownessResourcePage'


test("Verify resource Slowness",async ({page})=>{

    const slownessPage = new SlownessPage(page)
    const message = await slownessPage.validateMessage()
    await expect(message.includes('Thanks')).toBeTruthy()
})