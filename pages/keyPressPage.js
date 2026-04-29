
export class KeyPress{

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page
        this.inputText = this.page.locator("//input[@id='target']")
        this.textMessage = this.page.locator("//p[@id='result']")
    }

    async navigateToPage(){
        await this.page.goto("/key-presses")
    }

    async inputFocus(){
        await this.inputText.focus()
    }

    async KeyPress(key){
        await this.page.keyboard.press(key)
    }

    async getTextMessage(){
        return await this.textMessage.textContent()
    }

    async validateKeyPress(key){
        await this.navigateToPage()
        await this.inputFocus()
        await this.KeyPress(key)
        return this.getTextMessage()
    }


}