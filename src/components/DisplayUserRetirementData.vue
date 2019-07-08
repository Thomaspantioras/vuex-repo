<template>
  <ul>
    <li>
      <span>Full name:</span>
      <p>{{ fullName }}</p>
    </li>
    <li>
      <span>Date of Birth:</span>
      <p>{{ dateOfBirth }}</p>
    </li>
    <li>
      <span>Retirement Date:</span>
      <p>{{ this.userRetirementData.retirementDate }}</p>
    </li>
    <li>
      <span>Pension fund size:</span>
      <p>{{ this.userRetirementData.pensionFundSize }}</p>
    </li>
    <li>
      <span>Post code:</span>
      <p>{{ postcode }}</p>
    </li>
    <li>
      <span>Telephone number:</span>
      <p>{{ telephoneNumber }}</p>
    </li>
    <li>
      <span>Email address:</span>
      <p>{{ email }}</p>
    </li>
    <li>
      <span>Product code:</span>
      <p>{{ this.userRetirementData.retirementProductCode }}</p>
    </li>
  </ul>
</template>
 
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DisplayUserRetirementData',
  props: {
    userRetirementData: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'fullName',
      'dateOfBirth',
      'postcode',
      'telephoneNumber',
      'email'
    ])
  }
};
</script>
 
<style scoped>
li {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
ul {
  grid-template-rows: repeat(8, 1fr);
  margin-bottom: 9.34%;
  padding: 0;
}
span {
  grid-column: 1 / 3;
  font-weight: bold;
  font-size: 1em;
  margin-top: 1em;
  color: brown;
}
p {
  grid-column: 3 / 7;
  font-size: 1.1em;
  margin: 10px;
}
</style>