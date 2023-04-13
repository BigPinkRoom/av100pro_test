import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: '',
    tempEmail: '',
  },
  mutations: {
    SET_EMAIL(state, payload) {
      state.email = payload;
    },
    SET_TEMP_EMAIL(state, payload) {
      state.tempEmail = payload;
    },
  },
  actions: {
    setEmail({ commit, state }) {
      axios({
        method: 'PUT',
        url: 'https://av100.pro/api/user/2011679',
        headers: {
          'X-API-KEY': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
          'X-User-Token': '32e7a8fd-a134-4899-bb48-a8125730bc58',
          'X-Device-OS': 'web',
        },
        data: {
          email: state.tempEmail,
        },
      }).then(() => {
        commit('SET_EMAIL', state.tempEmail);
      });
    },
    getEmail({ commit }) {
      return axios({
        method: 'GET',
        url: 'https://av100.pro/api/user/2011679',
        headers: {
          'X-API-KEY': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
          'X-User-Token': '32e7a8fd-a134-4899-bb48-a8125730bc58',
          'X-Device-OS': 'web',
        },
      }).then((response) => {
        const { email } = response.data;
        commit('SET_EMAIL', email);
      });
    },
  },
  modules: {},
});
