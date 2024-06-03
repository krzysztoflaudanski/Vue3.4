import axios from 'axios';
import { apiUrl } from './../../../config';

export default {
  namespaced: true,
  state: {
    photos: [],
    photosRequest: {
      pending: false,
      error: false,
      success: false
    },
    allPhotosLoaded: false,
    singlePhoto: null,
  },
  mutations: {
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
    },
    TOGGLE_ALL_PHOTOS_LOADED(state) {
      state.allPhotosLoaded = !state.allPhotosLoaded
    },
    ADD_VOTE(state, photoId) {
      const photo = state.photos.find(p => p._id === photoId);
      if (photo) {
        photo.votes += 1;
      }
    }, SET_SINGLE_PHOTO(state, photo) {
      state.singlePhoto = photo;
    }
  },

  actions: {
    async fetchSinglePhoto({ commit }, photoId) {
      commit('START_PHOTOS_REQUEST'); // Rozpocznij żądanie

      try {
        const res = await axios.get(`${apiUrl}/photos/id/${photoId}`);

        commit('SET_SINGLE_PHOTO', res.data);
        console.log(res.data) // Ustaw pojedyncze zdjęcie
        commit('END_PHOTOS_REQUEST'); // Zakończ żądanie
      } catch (error) {
        commit('ERROR_PHOTOS_REQUEST'); // Obsłuż błąd żądania
        console.error('Error fetching single photo:', error);
      }
    },

    async fetchPhotosFromAPI({ commit, state }, { url, page }) {
      try {
        if (state.allPhotosLoaded && page === 1) commit('TOGGLE_ALL_PHOTOS_LOADED')

        if (state.allPhotosLoaded) return false

        commit('START_PHOTOS_REQUEST')
        const res = await axios.get(url)
        await new Promise((resolve, reject) => { setTimeout(resolve, 2000) })
        commit('END_PHOTOS_REQUEST')

        if (res.data.length < 12) commit('TOGGLE_ALL_PHOTOS_LOADED')

        if (page > 1) commit('ADD_PHOTOS', res.data)
        else commit('UPDATE_PHOTOS', res.data)
      } catch (err) {
        commit('ERROR_PHOTOS_REQUEST')
      }
    },

    async fetchPhotos({ dispatch }, page) {
      dispatch('fetchPhotosFromAPI', { url: `${apiUrl}/photos/${page}`, page })
    },

    async fetchCategoryPhotos({ dispatch }, { category, page }) {
      dispatch('fetchPhotosFromAPI', { url: `${apiUrl}/photos/${category}/${page}`, page })
    },

    async addVote({ commit }, photoId) {
      commit('START_PHOTOS_REQUEST');
      try {
        await axios.put(`${apiUrl}/photos/vote/${photoId}`);
        commit('ADD_VOTE', photoId);
        commit('END_PHOTOS_REQUEST');
      } catch (error) {
        commit('ERROR_PHOTOS_REQUEST');
        console.error('Error adding vote:', error);
      }
    }
  }
};
