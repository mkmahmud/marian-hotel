import axios from "axios";

const baseURL = 'http://localhost:5000' 


const headers = {
    'Content-Type': 'application/json'
    }

// Auth Tocken
const tocken = localStorage.getItem('jwt_Tocken')

if(tocken){
    headers.Authorization = `Bearer ${tocken}`
}

export const AxiosInstance = axios.create({
    baseURL,
    headers
})