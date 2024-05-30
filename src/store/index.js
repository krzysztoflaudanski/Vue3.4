import { createStore } from 'vuex'
import axios from 'axios';
import { apiUrl } from './../../config';

export default createStore({
  photosRequest: {
    pending: false,
    error: false,
    success: false
  },
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
    },
    ADD_PHOTOS(state, data) {
      state.photos = [...state.photos, ...data]
    },
    START_PHOTOS_REQUEST(state) {
      state.photosRequest = {
        pending: true,
        error: false,
        success: false
      }
    },
    END_PHOTOS_REQUEST(state) {
      state.photosRequest = {
        pending: false,
        error: false,
        success: true
      }
    },
    ERROR_PHOTOS_REQUEST(state) {
      state.photosRequest = {
        pending: false,
        error: true,
        success: false
      }
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
      try {
        commit('START_PHOTOS_REQUEST')
        const res = await axios.get(`${apiUrl}/photos/${page}`)
        await new Promise((resolve, reject) => { setTimeout(resolve, 2000) })
        commit('END_PHOTOS_REQUEST')

        if (page > 1) commit('ADD_PHOTOS', res.data)
        else commit('UPDATE_PHOTOS', res.data)
      } catch (err) {
        commit('ERROR_PHOTOS_REQUEST')
      }
    },
    async fetchCategoryPhotos({ commit }, { category, page }) {
      try {
        commit('START_PHOTOS_REQUEST');
        const res = await axios.get(`${apiUrl}/photos/${category}/${page}`);
        commit('END_PHOTOS_REQUEST');

        if (page > 1) {
          commit('ADD_PHOTOS', res.data);
        } else {
          commit('UPDATE_PHOTOS', res.data);
        }
      } catch (err) {
        commit('ERROR_PHOTOS_REQUEST');
      }
    }
  },
  modules: {}
});