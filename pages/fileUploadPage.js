import { fileChoosr } from '../utils/fileChooser'

export class FileUpload{

    /**
     * 
     * @param {import ('@playwright/test').Page } page 
     */
    constructor(page){
        this.page = page
        this.chooseFileButton = page.locator("//input[@id='fileInput']")
        this.uploadButton = page.locator("//button[@id='fileSubmit']")
        this.uploadMessage = page.locator("//h1[text()='File Uploaded!']")
    }

    async navigatesToPage(){
        await this.page.goto('/upload')
    }
    async chooseFileButtonClick(){
        await this.chooseFileButton.click()
    }
    async uploadButtonClick(){
        await this.uploadButton.click()
    }

    async uploadFile(){
        await this.navigatesToPage()
        const fileUpload = await fileChoosr(this.page,()=>{
            return this.chooseFileButtonClick()
        })
        await fileUpload.setFiles("D:/Projects/playwright-pom-framework/test_data/product_Details.jpeg")
        await this.uploadButtonClick()
    }

    async getUploadedMessage(){
        return await this.uploadMessage.textContent()
    }

}