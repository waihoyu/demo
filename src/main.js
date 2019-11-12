import Vue from 'vue';
import Vuex from 'vuex';
import createStore from './store';
import App from './components/App.vue';

Vue.use(Vuex);

const store = createStore();
const app = new Vue({
    el: '#app',
    store,
    render:h=>h(App)
});
