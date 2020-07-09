import axios from './http'

export const login = (data: object) => axios.post('/inner/login', data)