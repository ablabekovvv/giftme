import axios from "axios";


const API = axios.create({
    baseURL: "http://giftme.site/",
});

const getToken = () => {
    const token = JSON.parse(localStorage.getItem("user"))?.access;
    return token;
}

API.interceptors.request.use((request) => {
    if(getToken()) {
        request.headers = {
            "Authorization": "Bearer " + getToken()
        }
    }
    return request;
})

API.interceptors.response.use((config) => config,
    (error) => {
        if(error.response.status === 401) {
            const user = JSON.parse(localStorage.getItem("user"))
            API.post("auth/jwt/refresh/", {refresh: user.refresh})
                .then((res) => {
                    localStorage.setItem("user", JSON.stringify({
                        ...user,
                        access: res.data.access,
                        refresh: res.data.refresh,
                    }))
                    return API.request(error.config);
                })
                .catch((err) => {
                    if(err.status === 401) {
                        localStorage.setItem("user", "");
                        window.location.refresh()
                    }
                })
        }
    })

export default {
    createUser: (data) => API.post("auth/users/", data),
    createJWT: (data) => API.post("auth/jwt/create/", data),
    getUser: (id) => API.get("users/" + id),
    resetEmail: (data) => API.post("auth/users/set_email/", data),
    refreshJWT: (data) => API.post("auth/jwt/refresh/", data),
    getMyWishes: () => API.get("own-wishes/"),
    getMyBasket: () => API.get("own-bookings/"),
    getMyHolidays: () => API.get("own-holidays/"),
    createHoliday: (data) => API.post("holidays/create", data),
    editUserMe: (data,id) => API.put('users/edit/'+id , data,),
    createNewPassword:(data) => API.post('auth/users/set_password/',data,),
    deleteAccount:(data) => API.delete('auth/users/me',data),
    getUsers: () => API.get("users/"),
    deleteWish:(id) => API.delete('wishes/delete/'+id),
    createWish: (data) => API.post('wishes/create', data),
    editWish:(id ,data) => API.put('wishes/edit/' +id, data),
    getWish: () => API.get('own-wishes/'),
}