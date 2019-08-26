import Vue from 'vue'
import Router from 'vue-router'

import Home from '../routerview/Home'
import Notes from '../routerview/Notes'
import Case from '../routerview/Case'
import MessageBoard from '../routerview/MessageBoard'
import AboutMe from '../routerview/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:user/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/:user/notes',
      name: 'notes',
      component: Notes
    },
    {
      path: '/:user/case',
      name: 'case',
      component: Case
    },
    {
      path: '/:user/messageBoard',
      name: 'messageBoard',
      component: MessageBoard
    },
    {
      path: '/:user/aboutMe',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/home',
      redirect: '/xiaohui/home'
    },
    {
      path: '/:user',
      redirect: '/:user/home'
    },
    {
      path: '/',
      redirect: '/xiaohui/home'
    },
    {
      path: '*',
      redirect: '/xiaohui/home'
    },
    {
      path: '/case',
      redirect: '/xiaohui/case'
    },
    {
      path: '/notes',
      redirect: '/xiaohui/notes'
    },
    {
      path: '/messageBoard',
      redirect: '/xiaohui/messageBoard'
    },
    {
      path: '/aboutMe',
      redirect: '/xiaohui/aboutMe'
    }
  ]
})
