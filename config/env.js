import dotenv from 'dotenv'

dotenv.config()

export const ENV = {

  uiBaseURL: process.env.UI_BASE_URL,

  apiBaseURL: process.env.API_BASE_URL

}