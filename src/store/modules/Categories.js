import axios from 'axios';
import { apiUrl } from './../../../config';

export default {
  namespaced: true,
  state: {
    categories: []
  },
  getters: {
    categoriesAmount(state) {
      return state.categories.length;
    }
  },
  mutations: {
    UPDATE_CATEGORIES(state, data) {
      state.categories = data;
    }
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const res = await axios.get(`${apiUrl}/categories`);
        commit('UPDATE_CATEGORIES', res.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
  }
};