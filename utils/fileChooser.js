
/**
 * 
 * @param {import ('@playwright/test').Page} page 
 */
export async function fileChoosr(page,chooseButtonClick){
const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    chooseButtonClick()

]);

return fileChooser;
}