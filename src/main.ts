import VueCompositionApi from '@vue/composition-api';
import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.css';

Vue.config.productionTip = false
Vue.use(VueCompositionApi);

new Vue({
  render: h => h(App),
}).$mount('#app')
