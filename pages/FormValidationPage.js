
export class FormValidation{
    /**
     * @param {import ("@playwright/test").Page} page 
     */

    constructor(page){
        this.page = page
        this.contactNameXpath = page.locator(`//input[@id='validationCustom01']`)
        this.contactNumberXpath = page.locator(`//input[@name='contactnumber']`)
        this.dateXpath = page.locator(`//input[@name='pickupdate']`)
        this.paymentXpath = page.locator(`//select[@name='payment']`)
        this.submitXpath = page.locator(`//button[@type='submit']`)
        this.confirmationMessageXpath = page.locator(`//p[text()='Thank you for validating your ticket']`)
    }

    async navigateToFormPage(){
        await this.page.goto('/form-validation')
    }

    async enterContactName(contactName){
        await this.contactNameXpath.fill(contactName)
    }
    async enterContactNumber(contactNumber){
        await this.contactNumberXpath.fill(contactNumber)
    }
    async enterDate(date){
        await this.dateXpath.type(date)
    }
    async selectPaymentMethod(payment){
        await this.paymentXpath.click()
        await this.paymentXpath.selectOption({value:`${payment}`}) 
    }
    async submitClick(){
        await this.submitXpath.click()
    }

    async messageVerification(){
        const message =  await this.confirmationMessageXpath.textContent()
        return message
    }

    async fillForm(contactName,contactNumber,date,payment){
        await this.navigateToFormPage()
        console.log(`This is all the values ${contactName} and ${contactNumber} and ${date} and ${payment}`)
        await this.enterContactName(contactName)
        await this.enterContactNumber(contactNumber)
        await this.enterDate(date)
        await this.selectPaymentMethod(payment)
        await this.submitClick()
    }


} 