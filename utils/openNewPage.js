
/**
 * 
 * @param {import ('@playwright/test').BrowserContext} context
 * 
 */

export async function openNewPage(context,pageClick){
    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        pageClick()
    ])

    await newPage.waitForLoadState();
    return newPage;
}