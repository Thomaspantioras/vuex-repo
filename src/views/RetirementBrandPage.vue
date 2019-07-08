<template>
  <div class="retirement-page wrapper">
    <aside>
      <h1>RETIREMENT Brand</h1>
      <nav>
        <router-link class="nav-link" to="/equity_release_brand">Navigate to Equity Release Brand</router-link>
      </nav>
    </aside>
    <section class="retirement-form">
      <retirement-form @user-retirement-data-submitted="setSubmittedRetirementData"></retirement-form>
    </section>
    <section class="thank-you-page">
      <retirement-thank-you-page :user-retirement-data="userRetirementData"></retirement-thank-you-page>
    </section>
  </div>
</template>

<script>
import RetirementForm from '../components/RetirementForm';
import RetirementThankYouPage from '../components/RetirementThankYouPage';

export default {
  name: 'RetirementBrandPage',
  components: {
    RetirementForm,
    RetirementThankYouPage
  },
  beforeCreate: function() {
    document.body.className = 'retirement-brand-page';
  },
  data() {
    return {
      userRetirementData: {}
    };
  },
  methods: {
    setSubmittedRetirementData(userRetirementData) {
      this.userRetirementData = userRetirementData;
    }
  }
};
</script>

<style scoped>
.retirement-page {
  font-family: Andale Mono, monospace;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
}

aside {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
nav {
  text-align: center;
  background-color: #165a1633;
  padding: 14px 25px;
}

nav .nav-link {
  font-style: italic;
}

h1 {
  color: #0b660b;
}

.retirement-form {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}

.thank-you-page {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
</style>
