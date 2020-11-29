import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'vue-material-design-icons/styles.css';
import '@creativebulma/bulma-tooltip/dist/bulma-tooltip.css'
import InformationIcon from 'vue-material-design-icons/Information'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.component(InformationIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
