import { GET_DATA } from "./constant";
import { userState } from "./store";

const mutations = {
  [GET_DATA](state: userState, payload: boolean): void {
    state.loading = payload
  }
}

export default mutations;