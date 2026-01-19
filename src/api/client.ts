import axios from 'axios'

const port = 3000

export const apiClient = axios.create({
    baseURL: `http://localhost:${port}/api`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})