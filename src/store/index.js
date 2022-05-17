/*
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
 */
import { createStore } from 'vuex'
import storage from './../utils/storage'

const state = {
  userInfo: "" || storage.getItem("userInfo") // 获取用户信息
}

const mutations = {
  saveUserInfo(state,userInfo){
    state.userInfo = userInfo;
    storage.setItem('userInfo',userInfo)
}
}
export default createStore({
  state,
  mutations
})