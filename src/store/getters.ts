const getters = {
  unDoneLength(state: { list: { filter: (arg0: (x: { done: boolean; }) => boolean) => { (): any; new(): any; length: any; }; }; }) {
    return state.list.filter((x: { done: boolean; }) => x.done === false).length
  },
  infoList(state: { viewKey: string; list: any[]; }) {
    if (state.viewKey === 'all') {
      return state.list
    }
    if (state.viewKey === 'done') {
      return state.list.filter((x: { done: boolean }) => x.done)
    }
    if (state.viewKey === 'unDone') {
      return state.list.filter((x: { done: boolean }) => !x.done)
    }
    return state.list;
  }
}


export default getters;