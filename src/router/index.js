import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const Info = () => import('../components/leader-board/Info')
const LeaderBoardMain = () => import('../components/leader-board/LeaderBoardMain')

const routes = [
  {
    path: '/',
    name: 'LeaderBoardMain',
    component: LeaderBoardMain
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
