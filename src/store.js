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
    //TODO getters are like computed, are cashing. Think again about new Date(). Look also the algorithm to understand and refactoring
    age: state => {
      let today = new Date();
      if (state.userDetails.dateOfBirth) {
        let birthDate = new Date(state.userDetails.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age = age - 1;
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
