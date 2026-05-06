import {test,expect} from '../../fixtures/baseTest'
import test_data from '../../test_data/userData.json'
import { LoginPage } from '../../pages/LoginPage'

test.describe("Verify login Functionality",()=>{
        test(`Login with Valid User Name and Password`,async({page})=>{
            const loginPage =  new LoginPage(page)
            await loginPage.login(test_data.validUser.userName,test_data.validUser.password)
            await expect(loginPage.successMessage).toHaveText("You logged into a secure area!");
        })

         test(`Login with InValid User Name and Valid Password`,async({page})=>{
            const loginPage =  new LoginPage(page)
            await loginPage.login(test_data.invalidUser.userName,test_data.invalidUser.password)
            await expect(loginPage.successMessage).toHaveText("Your username is invalid!");
        })

         test(`Login with Valid User Name and Invalid Password`,async({page})=>{
            const loginPage =  new LoginPage(page)
            await loginPage.login(test_data.invalidPassword.userName,test_data.invalidPassword.password)
            await expect(loginPage.successMessage).toHaveText("Your password is invalid!");
        })


    })

