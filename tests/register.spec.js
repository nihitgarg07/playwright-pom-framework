import {test,expect} from "../fixtures/baseTest"
import {RegisterPage} from "../pages/registerPage"
import test_data from "../test_data/userData.json"

test("Verify register form Validation",async({loggedInPage})=>{
    const registerPage = new RegisterPage(loggedInPage)
    const message =  await registerPage.register(test_data.newUser.userName,test_data.newUser.password)
    await expect(message==="Username is already taken.").toBeTruthy()
})