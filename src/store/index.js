// Trong file store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    menuIsActive: false,
    loginModal: false,
    isToggleModal: false,
  },
  getters: {
    isToggleModal: (state) => state.isToggleModal,
  },
  mutations: {
    openLoginModal(state) {
      state.isToggleModal = true;
    },
    closeLoginModal(state) {
      state.isToggleModal = false;
    },
  },
  actions: {
    toggleInvoiceModal({ commit }) {
      commit('TOGGLE_MENU');
    },
    openLoginModal({ commit }) {
      commit('openLoginModal');
    },
    closeLoginModal({ commit }) {
      commit('closeLoginModal');
    },
  },
});
