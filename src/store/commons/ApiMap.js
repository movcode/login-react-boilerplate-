const URL_API = "http://localhost:8080/api/"

export default {
    user: {
        base: `${URL_API}user`,
        auth: `${URL_API}user/auth`,
    },
    validToken: `${URL_API}valid/token`
}