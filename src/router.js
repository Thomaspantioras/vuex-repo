import Vue from 'vue';
import Router from 'vue-router';
// import RetirementForm from './views/RetirementForm';
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
    // {
    //   path: '/equity_release_form',
    //   name: 'EquityReleaseForm',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/EquityReleaseForm')
    // }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
