import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userDetails: {
      fullName: null,
      dateOfBirth: null,
      postcode: null,
      telephoneNumber: null,
      email: null
    }
  },
  getters: {
    fullName: state => {
      return state.userDetails.fullName;
    },
    dateOfBirth: state => {
      return state.userDetails.dateOfBirth;
    },
    postcode: state => {
      return state.userDetails.postcode;
    },
    telephoneNumber: state => {
      return state.userDetails.telephoneNumber;
    },
    email: state => {
      return state.userDetails.email;
    },
    age: state => {
      const today = new Date();
      if (state.userDetails.dateOfBirth) {
        const birthDate = new Date(state.userDetails.dateOfBirth);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          return age - 1;
        }
        return age;
      }
    }
  },
  mutations: {
    updateFullName: (state, fullName) => {
      state.userDetails.fullName = fullName;
    },
    updateDateOfBirth: (state, dateOfBirth) => {
      state.userDetails.dateOfBirth = dateOfBirth;
    },
    updatePostcode: (state, postcode) => {
      state.userDetails.postcode = postcode;
    },
    updateTelephoneNumber: (state, telephoneNumber) => {
      state.userDetails.telephoneNumber = telephoneNumber;
    },
    updateEmail: (state, email) => {
      state.userDetails.email = email;
    }
  },
  actions: {}
});

export default store;
