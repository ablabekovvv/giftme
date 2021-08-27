import axios from "axios"
import {defaultConfig} from "next/dist/server/config-shared";

const API = axios.create({
    baseURL: "http://giftme.site/"
})

const getToken = () => {
    return JSON.parse(localStorage.getItem("user"))?.access;
}

// API.interceptors.request.use(() => {
//     config.headers = {
//         "Authorization": "Bearer " + getToken()
//     }
//     return request;
// })
// API.interceptors.response.use((config) => config,
//     (error) => {
//     if(error.config.status === 401) {
//         const use = JSON.parse(localStorage.getItem("user"))
//         API.post("auth/jwt/refresh/", {refresh: user.refresh})
//             .then((res) => {
//                 localStorage.setItem("user", JSON.stringify({
//                     ...user,
//                     access: res.data.access,
//                     refresh: res.data.refresh
//                 }))
//                 return error.config
//             })
//     }
//     }
// )

export default {
    getHolidays: () => API.get("holidays/"),
    createHoliday: () => API.post("wishes/create/"),
    createUser: (data) => API.post("auth/users/", data),
    createJWT: (data) => API.post("auth/jwt/create/", data),
    getUser: (id) => API.get("users/" + id),
    resetEmail: (data) => API.post("auth/users/set_email/", data),
    refreshJWT: (data) => API.post("auth/jwt/refresh/", data)
}