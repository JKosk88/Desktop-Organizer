import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import CustomButton from './components/CustomButton.vue';
import CustomInput from './components/CustomInput.vue';
import TopBar from './components/TopBar.vue';
import MyCalendar from './components/MyCalendar.vue';
import TemperatureComponent from './components/TemperatureComponent.vue';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component('CustomButton', CustomButton);
Vue.component('CustomInput', CustomInput);
Vue.component('TopBar', TopBar);
Vue.component('MyCalendar', MyCalendar);
Vue.component('TemperatureComponent', TemperatureComponent);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
