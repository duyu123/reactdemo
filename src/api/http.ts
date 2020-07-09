import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse
} from 'axios'

import { message } from 'antd'



axios.defaults.timeout = 10000;
axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? '' // 这里设置实际项目的生产环境地址
  : '/api';

  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.params) config.params._t = Date.now();
    return config;
  }, (err: AxiosError)=>{
    return Promise.reject(err);
  })

  axios.interceptors.response.use((res: AxiosResponse)=> {
    return Promise.resolve(res.data);
  }, (err: AxiosError)=> {
    // 服务器错误
    if (err.response && (err.response.status+'').startsWith('5')) {
      message.error('请求出错！')
    }

    return Promise.reject(err);
  })

  export default axios
