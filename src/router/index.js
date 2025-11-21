import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Ana Sayfa (View)

import LoginPage from '../components/pages/LoginPage.vue'; 
import RegisterPage from '../components/pages/RegisterPage.vue'; 
import ProductPage from '../components/pages/ProductPage.vue';
import CartView from '../views/CartView.vue'; 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage, 
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView, 
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage, 
    },
  ],
});

export default router;