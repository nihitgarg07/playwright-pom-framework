import {test,expect} from '../fixtures/baseTest'
import { FormValidation } from '../pages/FormValidationPage'
import test_data from '../test_data/contactInfo.json'

test("Verify form Validation",async({page})=>{
    const formValidation = new FormValidation(page)
    await formValidation.fillForm(test_data.contactName,test_data.contactNumber,test_data.Date,test_data.paymentMethod);
    const message = await formValidation.messageVerification()
    await expect(message).toContain(`Thank you`)
    await expect(page).toHaveURL(`/form-confirmation`)


})