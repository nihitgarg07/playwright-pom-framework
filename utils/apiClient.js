import { ENV } from "../config/env"

export class ApiClient{
/**
 * @param {import('@playwright/test').APIRequestContext} request
 */
    
    constructor(request){
        this.request = request
        this.baseUrl = ENV.apiBaseURL

    }

    async post(url,options = {}, data){
    }

    async get(endPoint,options={}){
        return await this.request.get(this.baseUrl+endPoint,options)
    }

}