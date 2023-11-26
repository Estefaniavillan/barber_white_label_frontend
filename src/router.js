import { createRouter, createWebHistory } from 'vue-router'

import LoginAdmi from './views/LoginAdmi.vue';
import Subcategories from './views/Subcategories.vue';
import Bookings from './views/Bookings.vue';
import AdminPage from './views/AdminPage.vue';
import ServicesAdmi from './views/ServicesAdmi.vue';
import ProductsAdmi from './views/ProductsAdmi.vue';
import CreationServices from './views/CreationServices.vue';

const routes = [
  { path: '/', component: LoginAdmi },
  { path: '/subcategories', component: Subcategories },
  { path: '/bookings', component: Bookings },
  {
    path: '/admin',
    component: AdminPage,
    children: [
      { path: 'products', component: ProductsAdmi },
      { path: 'services', component: ServicesAdmi },
      { path: 'creation', component: CreationServices },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;