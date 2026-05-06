import {test,expect} from '../../fixtures/baseTest'
import { BookingApi } from '../../api/bookingApi'

test.describe("@api Booking api",()=>{
    test("Verify get Booking api",async ({request})=>{
        const bookingApi = new BookingApi(request)
        const response = await bookingApi.getBookingIds()
        await expect(response.status()).toBe(200)
        await expect(response.statusText()=='OK').toBeTruthy()
    })


})