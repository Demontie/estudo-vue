import Vue from 'vue';
import Vuex from 'vuex';
import RepositorioStore from '../views/Repositorio/store/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    RepositorioStore
  }
});
