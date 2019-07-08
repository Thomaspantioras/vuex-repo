<template>
  <div id="equity-brand" class="wrapper">
    <header>
      <nav>
        <router-link to="/retirement_brand">Navigate to Retirement Brand</router-link>
      </nav>
      <h1>EQUITY RELEASE brand</h1>
    </header>
    <section class="equity-release-form">
      <equity-release-form @user-equity-release-data-submitted="setSubmittedEquityReleaseData"></equity-release-form>
    </section>
    <section>
      <equity-thank-you-page :user-equity-release-data="userEquityReleaseData"></equity-thank-you-page>
    </section>
  </div>
</template>

<script>
import EquityReleaseForm from '../components/EquityReleaseForm';
import EquityThankYouPage from '../components/EquityThankYouPage';

export default {
  name: 'EquityReleaseBrandPage',
  beforeCreate: function() {
    document.body.className = 'equity-brand-page';
  },
  components: {
    EquityReleaseForm,
    EquityThankYouPage
  },
  data() {
    return {
      userEquityReleaseData: {}
    };
  },
  methods: {
    setSubmittedEquityReleaseData(userEquityReleaseData) {
      this.userEquityReleaseData = userEquityReleaseData;
    }
  }
};
</script>

<style scoped>
#equity-brand {
  font-family: Optima, sans-serif;
}
.wrapper {
  display: grid;
  justify-items: center;
  grid-template-rows: auto 2fr;
  margin: 2% auto;
}
header {
  justify-self: stretch;
  display: flex;
  flex-flow: column wrap;
}
nav {
  width: 100%;
  padding: 1%;
  background-color: #ee7a07de;
}
h1 {
  align-self: center;
  margin: 4%;
}

nav .nav-link {
  text-decoration: none;
}
</style>
