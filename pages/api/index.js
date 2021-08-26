import axios from "axios"

const API = axios.create({
    baseURL: "http://giftme.site/"
})

const getToken = () => {
    return JSON.parse(localStorage.getItem("user"))?.access;
}

export default {
    getHolidays: () => API.get("holidays/"),
    createHoliday: () => API.post("wishes/create/"),
    createUser: (data) => API.post("auth/users/", data),
    createJWT: (data) => API.post("auth/jwt/create/", data),
    getUser: (id) => API.get("users/" + id, {
        headers: {
            "Authorization": "Bearer" + getToken()
        }
    }),
    refreshJWT: (data) => API.post("auth/jwt/refresh/", data)
}