import axios from 'axios';
// delete when push on heroku
const BASE_URL = 'http://localhost:3500';
// add when push on heroku
// const BASE_URL = 'https://is-wiki.herokuapp.com'

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});