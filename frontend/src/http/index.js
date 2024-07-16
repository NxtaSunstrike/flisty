import axios from 'axios'

export const API_URL = 'http://localhost:8000'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {
    config.headers.Bearer = `${localStorage.getItem('access')}`
    return config
})

export default $api