import state from './state';

const mutations = {
  initList(state: any, list:any) {
    state.list = list;;
  },
  setInputValue(state, step: any) {
    state.textValue = step;
  },
  getInputValue(state) {
    return state.textValue;
  },
  addList(state: any) {
    const obj = {
      id: state.nextId,
      title: state.textValue.trim(),
      done: false
    }
    state.list.push(obj);
    state.nextId++;
    state.inputValue = '';
  },
  removeListObj(state: { list: { id: any; }[]; }, id: any) {
    const i = state.list.findIndex((x: { id: any; }) => x.id === id)
    if (i !== -1) {
      state.list.splice(i, 1)
    }
  },
  changeStatus(state: { list: { id: any;done:boolean }[]; }, param: { id: any; status: any; }) {
    const i = state.list.findIndex((x: { id: any; }) => x.id === param.id);
    if (i !== -1) {
      state.list[i].done = param.status;
    }
  },
  cleanDone(state: { list: any[]; }) {
    state.list = state.list.filter((x: { done: boolean }) => x.done === false);
  },
  unDoneList(state: { list: any[]; }) {
    state.list = state.list.filter((x: { done: boolean }) => x.done === false);
  },
  doneList(state: { list: any[]; }) {
    state.list = state.list.filter((x: { done: boolean }) => x.done === true);
  },
  changeViewKey(state, step: any) {
    state.viewKey = step;
  },
};

export default mutations;