import { ApiClient } from "../utils/apiClient"

export class AuthApi{

    constructor(request){
        this.client = new ApiClient(request)
    }

    async getToken(){
        const response = this.client.
    }
}