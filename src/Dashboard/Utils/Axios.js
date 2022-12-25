
import axios from 'axios';

const baseURL = 'http://localhost:5000/';

const headers = {
    'content-type':'application/json'
}


export const Axios =  axios.create({
    baseURL,
    headers
})

