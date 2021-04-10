import axios from "axios"
const instance = axios.create({
    baseURL: "https://rvy-tinder-backend.herokuapp.com/"
})

export default instance;