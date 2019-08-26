import Vue from 'vue'
import Router from 'vue-router'
import BOM from '@/routerview/notes/javascript/BOM'
import DOM from '@/routerview/notes/javascript/DOM'
import ECMA from '@/routerview/notes/javascript/ECMA'
import ES5 from '@/routerview/notes/javascript/ES5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        default: BOM,
        BOM,
        DOM,
        ECMA,
        ES5
      }
    }
  ]
})
