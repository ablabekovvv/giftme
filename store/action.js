export const setToken = (token) => {
    return {
        type: "SET_AUTH_TOKEN",
        payload: token
    }
}