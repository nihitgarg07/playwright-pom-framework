import {test,expect} from '../../fixtures/baseTest'
import { MultipleWindows } from '../../pages/multipleWindowsPage'
import { openNewPage } from '../../utils/openNewPage'

test("Verify Multipe pages",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    const multipleWindowsPage = new MultipleWindows(page)
    await multipleWindowsPage.navigatesToPage()
    const newPage =  await openNewPage(context,()=>{
        return multipleWindowsPage.clickHereLink()
    })
    const newWindowsPage = new MultipleWindows(newPage)
    const Message = await newWindowsPage.getVerificationMessage()
    await expect(Message.includes("Example of a new window page for Automation Testing Practice")).toBeTruthy()
    await newPage.close()

})