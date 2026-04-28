
export class Iframe{

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

    constructor(page){
        this.page = page
        this.editorIframe = "//iframe[@id='mce_0_ifr']"
        this.emailIframe = "//iframe[@id='email-subscribe']"
        this.editorFrame = page.frameLocator(this.editorIframe)
        this.emailframe = page.frameLocator(this.emailIframe)

        this.inputTextArea = this.editorFrame.locator("//body[@id='tinymce']")
        this.emailInput = this.emailframe.locator("//input[@id='email']")
        this.submitButton = this.emailframe.locator("//button[@id='btn-subscribe']")
        this.subscribedMessage = this.emailframe.locator("//div[@id='success-message']")
        
    }

    async navigateToPage(){
        await this.page.goto("/iframe")
    }

    async enterEditorText(text){
        await this.inputTextArea.scrollIntoViewIfNeeded()
       // await this.inputTextArea.clear()
        await this.inputTextArea.fill(text)
    }

    async enterInputEmail(email){
        await this.emailInput.fill(email)
    }

    async submitButtonClick(){
        await this.submitButton.click()
    }

    async getSubscribedMessage(){
       return await this.subscribedMessage.textContent()
    }

    async sendEmail(text,email){
        await this.navigateToPage()
        await this.enterEditorText(text);
        await this.enterInputEmail(email)
        await this.submitButtonClick()
        
    }

    
}