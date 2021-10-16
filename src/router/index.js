import Vue from 'vue'
import VueRouter from 'vue-router'
import LeaderBoardMain from '../components/leader-board/LeaderBoardMain'
import Info from '../components/leader-board/Info'

Vue.use(VueRouter)

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
