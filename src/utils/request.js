/*
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
 */
/*
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
 */
// axios封装
import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
const TOKEN_INVALID = 'token过期，请重新登录'
const NETWORK_ERROR = '网络错误，请稍后再试'

const service = axios.create({
  baseURL: config.baseApi,
  timeout: 5000,
})

service.interceptors.response.use((res)=>{
  console.log("🚀 ~ file: request.js ~ line 22 ~ service.interceptors.request.use ~ res", res)
  const {data,code,msg} = res.data
  if(code === 200){
    return data
  }else if(code === 40001){
    ElMessage.error(TOKEN_INVALID)
    setTimeout(()=>{
      router.push('/login')
    },1500)
    return Promise.reject(TOKEN_INVALID)
  }else{
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

/**
 * @description: 请求核心方法
 * @param {*} options 请求配置
 * @return {*} service(options)
 */
function request(options){
  options.method = options.method || 'get'
  if(options.method.toLowerCase() === 'get'){
    options.params = options.data
  }
  let isMock = config.mock;
    if (typeof options.mock != 'undefined') {
        isMock = options.mock;
    }
  if(config.env === 'prod'){
    service.defaults.baseURL = config.baseApi
  }else{
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
 return service(options)
}

['get','post','put','delete','patch'].forEach(item=>{
  request[item] = (url,data,options)=>{
    return request({
      url,
      data,
      method:item,
      ...options
    })
  }
})

export default request
