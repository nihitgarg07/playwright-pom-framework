import { ENV } from "../config/env"

export class ApiClient {
    /**
     * @param {import('@playwright/test').APIRequestContext} request
     */

    constructor(request) {
        this.request = request
        this.baseUrl = ENV.apiBaseURL

    }

    async post(endPoint, data, options = {}) {
        return await this.request.post(this.baseUrl + endPoint, { data: data, ...options })
    }

    async get(endPoint, options = {}, id = '') {
        return await this.request.get(this.baseUrl + endPoint, options)
    }

    async put(endPoint, data, options = {}) {
        return await this.request.put(this.baseUrl + endPoint, { data: data, ...options })
    }
}