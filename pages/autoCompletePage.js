
export class AutoComplete{

 
    /**
     * 
     * @param {import('@playwright/test').Page } page 
     */
    constructor(page){
        this.page = page
        this.inputCountry = this.page.locator("//input[@id='country']")
        this.suggestions = this.page.locator("//div[@id='countryautocomplete-list']/div")
        this.submitButton = this.page.locator("//button[text()='Submit']")
        this.result = this.page.locator("//p[@id='result']")
        
    }

    async navigateToPage(){
        await this.page.goto("/autocomplete")
    }

    async EnterCountryName(text){
        await this.inputCountry.fill(text)
    }

    async selectCountry(expectedCountry){
        const count = await this.suggestions.count()
        for(let i=0;i<count;i++){
            const country =  await this.suggestions.nth(i).textContent()
            if(country.trim().includes(expectedCountry)){
                await this.suggestions.nth(i).click()
                break
            }
        }


    }

    async submitButtonClick(){
        await this.submitButton.click()
    }

    async getResult(){
        return await this.result.textContent()

    }
    async searchAndValidateCountry(text,expectedCountry){
        await this.navigateToPage()
        await this.EnterCountryName(text)
        await this.selectCountry(expectedCountry)
        await this.submitButtonClick()
        return this.getResult()
    }



}