
export class RegisterPage{
    /**
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page){
        this.page=page
        this.testRegisterPageXpath =  page.locator("//a[text()='Test Register Page']")
        this.usernameXpath = page.locator("//input[@id='username']")
        this.passwordXpath = page.locator("//input[@id='password']")
        this.confirmPasswordXpath = page.locator("//input[@id='confirmPassword']")
        this.registerButtonXpath = page.locator("//button[text()='Register']")
        this.ErrorMessage = page.locator("//div[@id='flash']/b")

    }

    async navigatetestRegisterPage(){
        await this.page.goto('/register')
    }
    async enterUserName(userName){
        await this.usernameXpath.fill(userName)
    }
    async enterpassword(password){
        await this.passwordXpath.fill(password)
    }
    async enterConfirmPassword(confirmPassword){
        await this.confirmPasswordXpath.fill(confirmPassword)
    }
    async registerButtonClick(){
        await this.registerButtonXpath.click()
    }

    async getMessage(){
        return await this.ErrorMessage.textContent()
    }

    async register(userName,password){
        await this.navigatetestRegisterPage()
        await this.enterUserName(userName)
        await this.enterpassword(password)
        await this.enterConfirmPassword(password)
        await this.registerButtonClick()
        const message = await this.getMessage()
        return message
    }
}