import request from './../utils/request'

export default {
  login(data){
    return request({
      url:'/users/login',
      method:'post',
      data
    })
  }
}
