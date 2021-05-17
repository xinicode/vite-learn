import { useStore } from "vuex";
import { State } from "../store";
import { Getters } from "../store/utils";

interface IUserYdStore {
  state: State,
  getters: Getters
}

const useYdState = (): IUserYdStore => {
  const { state, getters } = useStore<State>();
  return { state, getters }
}

export { useYdState }
export default useYdState