/*
 * @Author: Luqianyou 757628817@qq.com
 * @Date: 2022-05-14 12:06:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-17 14:46:01
 * @FilePath: \my-vue-app\src\config\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Luqianyou 757628817@qq.com, All Rights Reserved. 
 */
/**
 * @description: 环境配置封装
 */

const env = import.meta.env.MODE || 'prod';
const Envconfig = {
  dev:{
    baseApi:'/',
    mockApi:'https://www.fastmock.site/mock/d1b58d4189d19fbaa639851dc6664d58/mock'
  },
  test:{
    baseApi:'/',
    mockApi:'https://www.fastmock.site/mock/d1b58d4189d19fbaa639851dc6664d58/mock'
  },
  prod:{
    baseApi:'/',
    mockApi:'https://www.fastmock.site/mock/d1b58d4189d19fbaa639851dc6664d58/mock'
  },
}

export default{
  env,
  mock:true,
  namespace:'manager',
  ...Envconfig[env]
}
