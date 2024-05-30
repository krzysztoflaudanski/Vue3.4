import { createStore } from 'vuex'
import axios from 'axios';
import { apiUrl } from './../../config';

export default createStore({
  state: {
    categories: [],
    photos: [],
  },
  getters: {
    categoriesAmount(state) {
      return state.categories.length;
    }
  },
  mutations: {
    UPDATE_CATEGORIES(state, data) {
      state.categories = data;
    },
    UPDATE_PHOTOS(state, data) {
      state.photos = data;
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
    },
    async fetchPhotos({ commit }, page) {
      const res = await axios.get(`${apiUrl}/photos/${page}`)
      commit('UPDATE_PHOTOS', res.data)
    },
    async fetchCategoryPhotos({ commit }, { category, page }) {
      const res = await axios.get(`${apiUrl}/photos/${category}/${page}`)
      commit('UPDATE_PHOTOS', res.data)
    }
  },
  modules: {}
});