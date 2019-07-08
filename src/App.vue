<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import RetirementBrandPage from './views/RetirementBrandPage';
import EquityReleaseBrandPage from './views/EquityReleaseBrandPage';

export default {
  name: 'app',
  components: {
    RetirementBrandPage,
    EquityReleaseBrandPage
  }
};
</script>
<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body.retirement-brand-page {
  background: #eedebea1;
}
body.equity-brand-page {
  background: #c9eb773d;
}
#app {
  margin: 0px;
  padding: 10px;
}
</style>
