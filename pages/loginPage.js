

export class LoginPage{
/**
 * @param {import('@playwright/test').Page} page
 */

    constructor(page){
        this.page = page
        this.loginPageTextXpath = page.locator("//a[text()='Test Login Page']")
        this.usernameXpath = page.locator("//input[@id='username']")
        this.passwordXpath = page.locator("//input[@id='password']")
        this.loginButtonXpath = page.locator("//button[@id='submit-login']")
        this.successMessage = page.locator("//div[@id='flash']/b")
    }

    async loginTextClick(){
        await this.loginPageTextXpath.click()
    }
    async enterUserName(userName){
        await this.usernameXpath.type(userName)
    }
    async enterPassword(password){
        await this.passwordXpath.type(password)
    }
    async loginButtonClick(){
        await this.loginButtonXpath.click()
    }

    async login(userName,password){
        await this.loginTextClick()
        await this.enterUserName(userName)
        await this.enterPassword(password)
        await this.loginButtonClick()
    }

}