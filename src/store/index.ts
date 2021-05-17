import { createStore } from 'vuex';
import state from './state';
import mutations from './mutation';
import getters from './getters';
import actions from './actions';

const user = createStore({
  state,
  mutations,
  getters,
  actions
})

export default user;
