import { test, expect } from '../../fixtures/baseTest'
import { BookingApi } from '../../api/bookingApi'
import { AuthApi } from '../../api/authApi'
import updateBooking from '../../test_data/updateBooking.json'
import partialUpdate from '../../test_data/partialUpdate.json'

test.describe("@api Booking api", () => {
    test("Verify get all boooking data", async ({ request }) => {
        const bookingApi = new BookingApi(request)
        const response = await bookingApi.getBookingIds()
        await expect(response.status()).toBe(200)
        await expect(response.statusText() == 'OK').toBeTruthy()
    })

    test("Verify Get Booking by ID", async ({ request }) => {
        const bookingApi = new BookingApi(request)
        const response = await bookingApi.getBookingIds('/2')
        const responseBody = await response.json()
        const statusCode = await response.status()
        const statusText = await response.statusText()
        await expect(response.status()).toBe(200)
        await expect(responseBody.firstname).not.toBeNull()
    })

    test("Verify Create Booking", async ({ request }) => {
        const bookingApi = new BookingApi(request)
        const response = await bookingApi.createBooking()
        const responseBody = await response.json()
        const statusCode = await response.status()
        const statusText = await response.statusText()
        await expect(statusCode).toBe(200)
        await expect(statusText === 'OK').toBeTruthy()
        await expect(responseBody.bookingid).not.toBeNull()
    })

    test("Verify update Booking", async ({ request }) => {
        const bookingApi = new BookingApi(request)
        const authApi = new AuthApi(request)
        const bookingIdResponse = await bookingApi.createBooking()
        const bookingIdResponseBody = await bookingIdResponse.json()
        const bookingId = bookingIdResponseBody.bookingid
        const token = await authApi.getToken()
        const response = await bookingApi.updateBooking(`/${bookingId}`, token)
        const responseBody = await response.json()
        const statusCode = await response.status()
        const statusText = await response.statusText()
        await expect(responseBody.firstname === updateBooking.firstname).toBeTruthy()
        await expect(statusCode).toBe(200)
        await expect(statusText === 'OK').toBeTruthy()
    })

    test("Verify Partial Update", async ({ request }) => {
        const bookingApi = new BookingApi(request)
        const authApi = new AuthApi(request)
        const bookingIdResponse = await bookingApi.createBooking()
        const bookingIdResponseBody = await bookingIdResponse.json()
        const bookingId = bookingIdResponseBody.bookingid
        const token = await authApi.getToken()
        const response = await bookingApi.partialUpdate(`/${bookingId}`, token)
        const responseBody = await response.json()
        const statusCode = await response.status()
        const statusText = await response.statusText()
        await expect(responseBody.firstname === partialUpdate.firstname).toBeTruthy()
        await expect(statusCode).toBe(200)
        await expect(statusText === 'OK').toBeTruthy()
    })

    test("Verify delete booking",async({request})=>{
        const bookingApi = new BookingApi(request)
        const authApi = new AuthApi(request)
        const bookingIdResponse = await bookingApi.createBooking()
        const bookingIdResponseBody = await bookingIdResponse.json()
        const bookingId = bookingIdResponseBody.bookingid
        const token = await authApi.getToken()
        const response = await bookingApi.deleteBooking(`/${bookingId}`, token)
        const statusCode = await response.status()
        const statusText = await response.statusText()
        await expect(statusCode).toBe(201)
        await expect(statusText === 'Created').toBeTruthy()



    })


})