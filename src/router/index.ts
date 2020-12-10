import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { HomeRoutes } from './home'
import Home from "../views/home.vue";
import Index from '../views/index.vue';
import { NotFound, IndexPage, AboutPage } from '../views/public';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        component: IndexPage
      },
      {
        path: 'about',
        component: AboutPage
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },

];

const allRoutes: Array<RouteRecordRaw> = [...routes, ...HomeRoutes]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: allRoutes
});

export default router;
