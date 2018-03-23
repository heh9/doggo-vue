import Vuex from 'vuex';
import axios from 'axios';

const toFirstUpperCase = (str) => {
  return str[0].toUpperCase() + str.substr(1);
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      breeds: []
    },
    mutations: {
      setBreeds (state, breeds) {
        state.breeds = breeds;
      }
    },
    actions: {
      async getBreeds ({commit}) {
        const { data } = await axios.get('https://dog.ceo/api/breeds/list');
        commit('setBreeds', data.message.map(toFirstUpperCase));
      }
    }
  })
};

export default createStore;
