import Vue from 'vue';
import Router from 'vue-router';
import RetirementBrandPage from './views/RetirementBrandPage';
import EquityReleaseBrandPage from './views/EquityReleaseBrandPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'RetirementBrandPage',
      component: RetirementBrandPage
    },
    {
      path: '/retirement_brand',
      name: 'RetirementBrandPage',
      component: RetirementBrandPage
    },
    {
      path: '/equity_release_brand',
      name: 'EquityReleaseBrandPage',
      component: EquityReleaseBrandPage
    }
  ]
});
