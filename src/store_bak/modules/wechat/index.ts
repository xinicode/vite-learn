import { createState } from "./store";

const state = createState();

import getters from './gutters';
import actions from './action';
import mutations from './mutations';

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
}