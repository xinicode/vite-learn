import axios from 'axios';


const actions = {
  getList(context: { commit: (arg0: string, arg1: any) => void; }){
    axios.get('/a.json').then(({ data }) => {
      context.commit('initList', data)
    })
  }
}

export default actions;