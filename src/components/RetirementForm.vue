<template>
  <form v-if="!hidden" class="retirement-form" @submit.prevent="onSubmit">
    <fieldset class="form-details">
      <legend>Personal information</legend>
      <div class="wrapper">
        <label for="full-name">Full name:</label>
        <input type="text" id="full-name" :value="fullName" @input="updateFullName" required />
      </div>

      <div class="wrapper">
        <label for="date-of-birt">Date of birth:</label>
        <input
          type="date"
          id="date-of-birt"
          :value="dateOfBirth"
          @input="updateDateOfBirth"
          required
        />
      </div>

      <div class="wrapper">
        <label for="retirement-date">Retirement date:</label>
        <input type="month" id="retirement-date" v-model="retirementDate" required />
      </div>

      <div class="wrapper">
        <label for="pension-fund-size">Pension fund size:</label>
        <input type="number" id="pension-fund-size" min="0" v-model="pensionFundSize" required />
      </div>

      <div class="wrapper">
        <label for="postcode">Post code:</label>
        <input type="text" id="postcode" :value="postcode" @input="updatePostcode" required />
      </div>

      <div class="wrapper">
        <label for="telephone-number">Telephone number:</label>
        <input
          type="tel"
          id="telephone-number"
          :value="telephoneNumber"
          @input="updateTelephoneNumber"
          required
        />
      </div>

      <div class="wrapper">
        <label for="email">Email address:</label>
        <input type="email" id="email" :value="email" @input="updateEmail" required />
      </div>
      <div class="wrapper">
        <input type="submit" value="Submit" />
      </div>
    </fieldset>
  </form>
</template>
 
<script>
import { mapGetters } from 'vuex';
// import { mapGetters, mapMutations } from 'vuex';

//TODO validation in form
export default {
  name: 'RetirementForm',
  components: {},
  data() {
    return {
      comparisonAge: 55,
      lowFundSizeThreshold: 50000,
      highFundSizeThreshold: 150000,
      retirementDate: null,
      pensionFundSize: null,
      retirementProductCode: null,
      hidden: false
    };
  },
  computed: {
    ...mapGetters([
      'fullName',
      'dateOfBirth',
      'postcode',
      'telephoneNumber',
      'email',
      'age'
    ])
  },
  methods: {
    onSubmit() {
      const age = this.age;
      const comparisonAge = this.comparisonAge;
      const lowFundSizeThreshold = this.lowFundSizeThreshold;
      const highFundSizeThreshold = this.highFundSizeThreshold;
      const pensionFundSize = this.pensionFundSize;

      this.retirementProductCode = this.calculateRetirementProductCode(
        age,
        comparisonAge,
        lowFundSizeThreshold,
        highFundSizeThreshold,
        pensionFundSize
      );

      let userRetirementData = {
        retirementDate: this.retirementDate,
        pensionFundSize: '£' + this.pensionFundSize,
        retirementProductCode: this.retirementProductCode
      };

      this.$emit('user-retirement-data-submitted', userRetirementData);
      this.hidden = true;
    },

    calculateRetirementProductCode(
      age,
      comparisonAge,
      lowFundSizeThreshold,
      highFundSizeThreshold,
      pensionFundSize
    ) {
      return age >= comparisonAge
        ? this.getProductCodeOverComparisonAge(
            pensionFundSize,
            lowFundSizeThreshold,
            highFundSizeThreshold
          )
        : this.getProductCodeUnderComparisonAge(
            pensionFundSize,
            lowFundSizeThreshold
          );
    },

    getProductCodeOverComparisonAge(
      pensionFundSize,
      lowFundSizeThreshold,
      highFundSizeThreshold
    ) {
      return pensionFundSize >= highFundSizeThreshold
        ? 'Product 122'
        : pensionFundSize >= lowFundSizeThreshold
        ? 'Product 121'
        : 'Product 120';
    },

    getProductCodeUnderComparisonAge(pensionFundSize, lowFundSizeThreshold) {
      return pensionFundSize > lowFundSizeThreshold
        ? 'Product 111'
        : 'Product 110';
    },
    // ...mapMutations([
    //   'updateFullName',
    //   'updateDateOfBirth',
    //   'updatePostcode',
    //   'updateTelephoneNumber',
    //   'updateEmail'
    // ])

    updateFullName(event) {
      this.$store.commit('updateFullName', event.target.value);
    },
    updateDateOfBirth(event) {
      this.$store.commit('updateDateOfBirth', event.target.value);
    },
    updatePostcode(event) {
      this.$store.commit('updatePostcode', event.target.value);
    },
    updateTelephoneNumber(event) {
      this.$store.commit('updateTelephoneNumber', event.target.value);
    },
    updateEmail(event) {
      this.$store.commit('updateEmail', event.target.value);
    }
  }
};
</script>
 
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.retirement-form {
  margin-top: 10%;
}
label {
  grid-column: 1 / 3;
  margin-top: 1em;
  font-weight: bold;
  color: #344350;
}
input {
  grid-column: 3 / 7;
  font-size: 1.2em;
  margin: 10px;
}
input[type='submit'] {
  grid-column: 1 / 7;
  justify-self: center;
  width: 10em;
  background-color: #485b61e0;
  color: white;
  font-size: 1.1em;
  padding: 0.2em;
}
input[type='submit']:hover {
  background-color: #0b660b;
}
</style>