import { ApiClient } from "../utils/apiClient"
import { ENDPOINTS, HEADERS, getCookie } from '../utils/constants.js'
import createBooking from '../test_data/createBooking.json'
import updateBooking from '../test_data/updateBooking.json'
import partialUpdate from '../test_data/partialUpdate.json'
import { json } from "node:stream/consumers"


export class BookingApi {

    constructor(request) {
        this.client = new ApiClient(request)
    }

    async getBookingIds(id) {
        if (id) {
            return await this.client.get(ENDPOINTS.BOOKINGS + id)
        }
        else {
            return await this.client.get(ENDPOINTS.BOOKINGS)
        }
    }

    async createBooking() {
        return await this.client.post(ENDPOINTS.BOOKINGS, createBooking, { headers: { ...HEADERS.CONTENT_TYPE } })
    }

    async updateBooking(id, token) {
        return await this.client.put(ENDPOINTS.BOOKINGS + id, updateBooking, { headers: { ...HEADERS.CONTENT_TYPE, ...HEADERS.ACCEPT, ...getCookie(token) } })
    }

    async partialUpdate(id, token) {
        return await this.client.patch(ENDPOINTS.BOOKINGS + id, partialUpdate, { headers: { ...HEADERS.CONTENT_TYPE, ...HEADERS.ACCEPT, ...getCookie(token) } })

    }

    async deleteBooking(id,token){
        return await this.client.delete(ENDPOINTS.BOOKINGS+id,{headers:{...HEADERS.CONTENT_TYPE, ...getCookie(token)}})
    }


}