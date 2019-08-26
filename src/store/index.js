import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {UPDATE_USERTHEME} from '../assets/data/mutation-types.js'

import user from './modules/user'
import blogger from './modules/blogger'
import navigation from './modules/navigation'
import home from './modules/home'
import note from './modules/note'
import cased from './modules/case'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    blogger,
    navigation,
    home,
    note,
    cased
  }
})
