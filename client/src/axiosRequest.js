import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3'

export const publicRequest = axios.create({
    baseURL: baseUrl
})

const userRequestbaseUrl = 'flix-flex.vercel.app'

export const userPublicRequest = axios.create({
    baseURL: userRequestbaseUrl,
})
