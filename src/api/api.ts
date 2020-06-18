import axios from './http'

export const login = (data: object) => axios.post('/api/login', data)