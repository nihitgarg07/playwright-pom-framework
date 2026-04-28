import {test,expect} from '../fixtures/baseTest'
import { FileUpload } from '../pages/fileUploadPage'

test("verify file upload",async ({page})=>{

    const fileUpload = new FileUpload(page)
    await fileUpload.uploadFile()
    const message= await fileUpload.getUploadedMessage()
    await expect(message==='File Uploaded!').toBeTruthy()
})