
export class SlownessPage{

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page
        this.finishedMessage = this.page.locator("//p//*[contains(text(),'Thanks')]")
    }

    async navigateToPage(){
        await this.page.goto("/slow")
    }

    async waitforMessage(){
        await this.page.waitForLoadState('networkidle')
    }

    async getMessage(){
        return await this.finishedMessage.textContent()
    }

    async validateMessage(){
        await this.navigateToPage()
        await this.waitforMessage()
        return await this.getMessage()
    }


}