import Axios from "axios"

const axios = Axios.create({
    baseURL: "https://api.github.com/users"
})

export default axios