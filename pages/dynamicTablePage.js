
export class DynamicTablePage{
/**
 * 
 * @param {import ('@playwright/test').Page} page 
 */

    constructor(page){
        this.page = page
        this.showPerPageDropdown = page.locator("//select[@name='example_length']")
        this.tableHeaders = page.locator("//thead//th")

    }


    async navigateToPage(){
        await this.page.goto("/dynamic-pagination-table")
    }

    async getSpecificRow(name){
        const row = await this.page.locator("//tbody/tr",{hasText : `${name}`})
        return row
    }

    async getSpecificColumnIndex(header){
        let columnIndex = 0
        const allColumn = await this.tableHeaders.allTextContents()
        const count =  allColumn.length
        columnIndex = allColumn.findIndex(col => col.trim()===header)
        return columnIndex + 1
    }

    async showPerPageClick(number){
        await this.showPerPageDropdown.click()
        await this.showPerPageDropdown.selectOption({value:number})
    }

    async getColumnValue(number,name,header){
        await this.showPerPageClick(number)
        const rowLocator = await this.getSpecificRow(name)
        const columnIndex = await this.getSpecificColumnIndex(header)
        const columnValue= await rowLocator.locator(`td:nth-child(${columnIndex})`).textContent()
        return columnValue
    }





}