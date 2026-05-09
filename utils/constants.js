
export const ENDPOINTS = {
    AUTH: '/auth',
    BOOKINGS: '/booking'
}
export const HEADERS = {

    CONTENT_TYPE: {
        'Content-Type': 'application/json'
    },
    ACCEPT: {
        'Accept': 'application/json'
    }
}

export const getCookie = (token)=>{
    return {
        'Cookie': `token=${token}`
    }
}
 
