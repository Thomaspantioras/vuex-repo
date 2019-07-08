<template>
  <form v-if="!hidden" class="wrapper" @submit.prevent="onSubmit">
    <fieldset class="form-details">
      <div class="row-1">
        <div>
          <label for="full-name">Full name:</label>
          <input type="text" id="full-name" :value="fullName" @input="updateFullName" required />
        </div>

        <div>
          <label for="date-of-birth">Date of birth:</label>
          <input
            type="date"
            id="date-of-birth"
            :value="dateOfBirth"
            @input="updateDateOfBirth"
            required
          />
        </div>
      </div>

      <div class="row-2">
        <div>
          <label for="postcode">Post code:</label>
          <input type="text" id="postcode" :value="postcode" @input="updatePostcode" required />
        </div>

        <div>
          <label for="telephone-number">Telephone number:</label>
          <input
            type="tel"
            id="telephone-number"
            :value="telephoneNumber"
            @input="updateTelephoneNumber"
            required
          />
        </div>
      </div>
      <div class="row-3">
        <div>
          <label for="email">Email address:</label>
          <input type="email" id="email" :value="email" @input="updateEmail" required />
        </div>

        <div>
          <label for="property-value">Property value:</label>
          <input type="number" id="property-value" min="0" v-model="propertyValue" required />
        </div>
      </div>

      <div class="submitted-button">
        <input type="submit" value="Submit" />
      </div>
    </fieldset>
  </form>
</template>
 
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EquityReleaseForm',
  components: {},
  data() {
    return {
      comparisonAge: 55,
      propertyValueThreshold: 70000,
      lowRateOfPropertyValue: 25.5,
      mediumRateOfPropertyValue: 37.5,
      highRateOfPropertyValue: 48.0,
      propertyValue: null,
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
      const equityProductCode = this.calculateEquityReleaseProductCode();
      const equityReleaseValuation = this.getEquityReleaseValuationByProductCode(
        equityProductCode
      );

      let userEquityReleaseData = {
        propertyValue: '£' + this.propertyValue,
        equityProductCode,
        equityReleaseValuation
      };

      this.$emit('user-equity-release-data-submitted', userEquityReleaseData);
      this.hidden = true;
    },

    calculateEquityReleaseProductCode() {
      return this.age >= this.comparisonAge &&
        this.propertyValue >= this.propertyValueThreshold
        ? 'Product 222'
        : 'Product 211';
    },

    getEquityReleaseValuationByProductCode(equityProductCode) {
      return equityProductCode === 'Product 222'
        ? this.valueEquityRelease()
        : 'n/a';
    },

    valueEquityRelease() {
      if (this.age < 65) {
        return '£' + this.propertyValue * (this.lowRateOfPropertyValue / 100);
      }

      if (this.age < 75) {
        return (
          '£' + this.propertyValue * (this.mediumRateOfPropertyValue / 100)
        );
      }

      return '£' + this.propertyValue * (this.highRateOfPropertyValue / 100);
    },

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
  display: flex;
  flex-direction: column;
}

fieldset.form-details {
  border: none;
  padding: 0;
}

[class*='row-'] > div {
  margin: 0 5%;
}

[class*='row-'] {
  display: flex;
  margin: 0 6%;
}

label {
  margin-top: 1em;
  font-weight: bold;
  font-size: 1em;
  color: #244a13;
}

input {
  width: 13em;
  font-size: 1.1em;
  border-radius: 8px;
  margin: 10px;
}

input[type='date'] {
  width: 16em;
}

input[type='submit'] {
  margin: 5%;
  width: 10em;
  background-color: #ffa700ab;
}

input[type='submit']:hover {
  background-color: #4bb936b3;
}

.submitted-button {
  display: flex;
  justify-content: space-evenly;
}
</style>