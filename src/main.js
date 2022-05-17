/*
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import storage from './utils/storage'
import api from './api/index'
import store from './store'

const app = createApp(App)

app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api
app.config.globalProperties.$request = request;

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
