/*
 * @Author: Luqianyou 757628817@qq.com
 * @Date: 2022-05-15 10:46:33
 * @LastEditors: Luqianyou 757628817@qq.com
 * @LastEditTime: 2022-05-15 10:53:18
 * @FilePath: \my-vue-app\src\utils\storage.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Luqianyou 757628817@qq.com, All Rights Reserved. 
 */
import config from './../config'

export default{
  setItem(key,val){
    let storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(config.namespace,JSON.stringify(storage))
  },
  getItem(key){
    return this.getStorage()[key]
  },
  getStorage(){
    return JSON.parse(window.localStorage.getItem(config.namespace)||'{}')
  },
  clearItem(key){
    let storage = this.getStorage()
    delete storage[key]
    return storage
  },
  clearAll(){
    window.localStorage.removeItem(config.namespace)
  }
}
