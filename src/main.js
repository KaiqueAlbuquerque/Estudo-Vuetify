import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VAnimateCss from 'v-animate-css';

import VueRouter from 'vue-router';
import { rotas } from './rotas';

Vue.use(VueRouter);
Vue.use(VAnimateCss);
Vue.config.productionTip = false

const rota = new VueRouter({
  routes: rotas,
  mode: 'history'
});

new Vue({
  vuetify,
  router: rota,
  render: h => h(App)
}).$mount('#app')
