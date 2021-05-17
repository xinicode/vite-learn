import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store';
const app = createApp(App);
import router from './router';
import vueHighCharts from './directive/hightcharts';
// app.config.productionTip = false;


import './mock'


store.dispatch('getList')

app.use(vueHighCharts);
app.use(router).use(store).use(Antd).mount('#app')