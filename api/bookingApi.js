import { ApiClient } from "../utils/apiClient"
import {ENDPOINTS} from '../utils/constants.js'
 

export class BookingApi{

    constructor(request){
        this.client = new ApiClient(request)
    }

    async getBookingIds(){
       return await this.client.get(ENDPOINTS.BOOKINGS)
    }
}