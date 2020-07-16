import Vue from 'vue';
import Vuex from 'vuex';
import MainStore from '../views/Main/store/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MainStore
  }
});
