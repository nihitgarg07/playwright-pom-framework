import {test,expect} from '../fixtures/baseTest'
import { KeyPress } from '../pages/keyPressPage'

test("Verify Enter Key press",async({page})=>{

    const keyPress = new KeyPress(page)
    const message = await keyPress.validateKeyPress('ArrowLeft')
    await expect(message.includes('LEFT')).toBeTruthy()

})
