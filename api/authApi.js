import { ApiClient } from "../utils/apiClient"
import { ENDPOINTS } from "../utils/constants"
import authData from '../test_data/authData.json'
import { HEADERS } from "../utils/constants"

export class AuthApi{

    constructor(request){
        this.client = new ApiClient(request)
    }

    async getToken(){
        const response =  await this.client.post(ENDPOINTS.AUTH,authData,HEADERS.CONTENT_TYPE)
        const responseBody = await response.json()
        return responseBody.token
    }
}