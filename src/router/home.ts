import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";
import A1 from '../views/moduleA/a1.vue';
import B1 from '../views/moduleB/b1.vue';
import UsersPage from '../views/users/users.vue'
import UserPage from '../views/users/user.vue'
import ModuleC1 from '../views/moduleC/c1.vue';
import ModuleD1 from '../views/moduleD/d1.vue';

// import NotFound from '../views/public/404.vue';

import store from '@/store';


const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.user.isLogin) {
        next({ path: '/login' })
      } else {
        next()
      }
      // next()
    },
    children: [
      {
        path: 'a1',
        name: 'a1',
        component: A1
      },
      {
        path: 'b1',
        name: 'b1',
        component: B1
      },
      {
        path: 'c1',
        name: 'c1',
        component: ModuleC1
      },
      {
        path: 'd1',
        name: 'd1',
        component: ModuleD1
      },
      {
        path: 'users',
        component: UsersPage
      },
      {
        path: 'users/:id',
        component: UserPage
      },
      {
        path: '',
        redirect: '/home/a1'
      },
      /*  {
         path:'/:catchAll(.*)',
         component: NotFound
       } */
    ]
  }
];


export { routes as HomeRoutes }