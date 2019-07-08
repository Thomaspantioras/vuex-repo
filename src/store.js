import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, //TODO delete it after developing
  state: {
    userDetails: {
      fullName: null,
      dateOfBirth: null,
      postcode: null,
      telephoneNumber: null,
      email: null
    }
    // showRetirementLink: true,
    // showEquityLink: false
  },
  // TODO you will not need every property here if no any computation needed. may delete their getters
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
  actions: {
    //TODO move this to retirement form component in computed or methods. RetirementProductCode have to be in local state
    // calculateRetirementProductCode({ commit }, age) {
    //   const ageLimit = 55;
    //   const lowerFundSizeLimit = 50000;
    //   const upperFundSizeLimit = 150000;
    //   let retirementProductCode;
    //   const pensionFundSize = this.state.userDetails.pensionFundSize;
    //   const getProductCodeOverAgeLimit = (
    //     pensionFundSize,
    //     lowerFundSizeLimit,
    //     upperFundSizeLimit
    //   ) => {
    //     if (pensionFundSize > upperFundSizeLimit) {
    //       retirementProductCode = 'Product 122';
    //     } else if (pensionFundSize > lowerFundSizeLimit) {
    //       retirementProductCode = 'Product 121';
    //     } else {
    //       retirementProductCode = 'Product 120';
    //     }
    //   };
    //   const getProductCodeUnderAgeLimit = (
    //     pensionFundSize,
    //     lowerFundSizeLimit
    //   ) => {
    //     if (pensionFundSize > lowerFundSizeLimit) {
    //       retirementProductCode = 'Product 111';
    //     } else {
    //       retirementProductCode = 'Product 110';
    //     }
    //   };
    //   if (age > ageLimit) {
    //     getProductCodeOverAgeLimit(
    //       pensionFundSize,
    //       lowerFundSizeLimit,
    //       upperFundSizeLimit
    //     );
    //     // if (pensionFundSize > secondFundSizeLimit) {
    //     //   retirementProductCode = 'Product 122';
    //     // } else if (pensionFundSize > firstFundSizeLimit) {
    //     //   retirementProductCode = 'Product 121';
    //     // } else {
    //     //   retirementProductCode = 'Product 120';
    //     // }
    //   } else {
    //     getProductCodeUnderAgeLimit(pensionFundSize, lowerFundSizeLimit);
    //     // if (pensionFundSize > firstFundSizeLimit) {
    //     //   retirementProductCode = 'Product 111';
    //     // } else {
    //     //   retirementProductCode = 'Product 110';
    //     // }
    //   }
    // commit('updateRetirementProductCode', retirementProductCode);
    // }
    // increment({ commit }) {
    //   commit('increment');
    // },
    // //async calculations
    // asyncIncrement({ commit }) {
    //   setTimeout(() => {
    //     commit('increment');
    //   }, 1000);
    // },
    // //Let's say we pass a payload eg duration
    // asyncIncrement({ commit }, duration) {
    //   setTimeout(() => {
    //     commit('increment');
    //   }, duration);
    // },
    // //or
    // asyncIncrement: ({ commit }, asyncNum) => {
    //   setTimeout(() => {
    //     commit('increment', asyncNum.by);
    //   }, asyncNum.dur);
    // }
  }
});

export default store;
