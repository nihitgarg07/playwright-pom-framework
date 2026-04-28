import {test,expect} from '../fixtures/baseTest'
import { DynamicTablePage } from '../pages/dynamicTablePage'
import test_data from '../test_data/dynamicTableData.json'

test("Verify Dynamic Table",async ({page})=>{
    const dynamicTablePage = new DynamicTablePage(page)
    await dynamicTablePage.navigateToPage()
    const columnValue =  await dynamicTablePage.getColumnValue(test_data.showPerPageValue,test_data.studentName,test_data.column)
    await expect(columnValue===test_data.Major).toBeTruthy()
})