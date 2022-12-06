import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/Services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: PortfolioView,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
})

export default router
