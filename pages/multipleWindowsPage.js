export class MultipleWindows{

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page
        this.multipleWindowslink = page.locator("//a[text()='Click Here']")
        this.verificationMessage = page.locator("//h1[contains(text(),'Example')]")

    }

    async navigatesToPage(){
        await this.page.goto('/windows')
    }

    async clickHereLink(){
        await this.multipleWindowslink.click()
    }

    async getVerificationMessage(){
        const message = await this.verificationMessage.textContent()
        return message
    }


}