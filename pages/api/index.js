import axios from "axios";

const API = axios.create({
    baseURL: "http://giftme.site/"
})

export default {
    getHolidays: () => API.get("holidays/"),
    createHoliday: () => API.post("wishes/create/", data),
    createUser: (data) => API.post("auth/users/", data),
    createJWT: (data) => API.post("auth/jwt/create/", data)
}