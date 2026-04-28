import {test,expect} from '../fixtures/baseTest'
import { Iframe } from '../pages/iframePage'

test("Verify Iframe",async ({page})=>{

    const iframe = new Iframe(page)
    await iframe.sendEmail("This is manuallyWritten Txt","nihitgarg007@gmail.com")
    const message = await iframe.getSubscribedMessage()
    await expect(message==="You are now subscribed!").toBeTruthy()
})