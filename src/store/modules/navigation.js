import {UPDATE_STATE} from '../../assets/data/mutation-types.js'

const state = {
  navState: ''
}

const mutations = {
  [UPDATE_STATE] (state, navState) {
    state.navState = navState
  }
}

const actions = {
  setNavState (context, name) {
    context.commit(UPDATE_STATE, name)
  }
}

export default {
  state,
  mutations,
  actions
}
