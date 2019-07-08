<template>
  <ul class="striped-list">
    <li>
      <span>Full name:</span>
      <p>{{ fullName }}</p>
    </li>
    <li>
      <span>Date of Birth:</span>
      <p>{{ dateOfBirth }}</p>
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
      <span>Property value:</span>
      <p>{{ this.userEquityReleaseData.propertyValue }}</p>
    </li>
    <li>
      <span>Product code:</span>
      <p>{{ this.userEquityReleaseData.equityProductCode }}</p>
    </li>
    <li>
      <span>Equity release valuation:</span>
      <p>{{ this.userEquityReleaseData.equityReleaseValuation }}</p>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DisplayUserEquityReleaseData',
  props: {
    userEquityReleaseData: {
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
.striped-list {
  list-style-type: none;
  padding-inline-start: 0;
  border: 1px solid rgb(224, 109, 15);
}

ul.striped-list > li:nth-of-type(odd) {
  background-color: #93b5742e;
}
ul.striped-list > li {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 11px;
  margin: 1px;
}
span {
  font-weight: bold;
  color: #314246;
  font-size: 1em;
}
p {
  margin: 0 1%;
  justify-self: center;
}
</style>