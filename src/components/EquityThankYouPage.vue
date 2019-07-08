<template>
  <div v-if="Object.entries(userEquityReleaseData).length" class="thank-you-page-equity-brand">
    <h3>Thanks for filling out our form!</h3>

    <display-user-equity-release-data
      class="display-data"
      :user-equity-release-data="userEquityReleaseData"
    ></display-user-equity-release-data>
  </div>
</template>
 
<script>
import DisplayUserEquityReleaseData from '../components/DisplayUserEquityReleaseData';

export default {
  components: { DisplayUserEquityReleaseData },
  props: {
    userEquityReleaseData: {
      type: Object,
      required: true
    }
  }
};
</script>
 
<style scoped>
.thank-you-page-equity-brand {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.display-data {
  margin: 3% 13%;
}

h3 {
  padding: 4%;
}
</style>