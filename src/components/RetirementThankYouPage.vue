<template>
  <div v-if="Object.entries(userRetirementData).length" class="thank-you-page">
    <h3>Thank you for filling out your information.</h3>

    <display-user-retirement-data :user-retirement-data="userRetirementData"></display-user-retirement-data>
  </div>
</template>
 
<script>
import DisplayUserRetirementData from '../components/DisplayUserRetirementData';

export default {
  components: { DisplayUserRetirementData },
  props: {
    userRetirementData: {
      type: Object,
      required: true
    }
  }
};
</script>
 
<style scoped>
.thank-you-page {
  margin-top: 10%;
}

h3 {
  grid-row: 1/3;
  grid-column: 1/7;
  margin: 8% 0;
}

display-user-retirement-data {
  grid-row: 3/11;
  grid-column: 1/7;
}
</style>