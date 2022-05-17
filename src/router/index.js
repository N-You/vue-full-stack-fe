import {createRouter,createWebHashHistory} from 'vue-router'
const Home = ()=>import('../components/Home.vue')
const Login = ()=>import('../views/Login.vue')
const Welcome = ()=>import('../views/Welcome.vue')

const routes = [
  {name:'home',path:'/',meta:{title:'首页'},component:Home,redirect:'/welcome',children:[
    {name:'welcome',path:'/welcome',meta:{title:'欢迎页'},component:Welcome},
  ]},
  {name:'login',path:'/login',meta:{title:'登录'},component:Login}
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router