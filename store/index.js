import Vuex from 'vuex'
import { state, mutations, getters } from './mutations'
import actions from './actions'
import MonitorMutations from './plugins/monitorMutations'

export default function createStore() {
  return new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    strict: true,
    plugins: [MonitorMutations],
  })
}
