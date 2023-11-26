import { createRouter, createWebHistory } from 'vue-router';

import LoginAdmiView from './views/LoginAdmiView.vue';
import HomePageView  from './views/HomePageView.vue';
import SubcategoriesView from './views/SubcategoriesView.vue';
import BookingsView from './views/BookingsView.vue';
import AdminPageView from './views/AdminPageView.vue';
import ServicesAdmiView from './views/ServicesAdmiView.vue';
import ProductsAdmiView from './views/ProductsAdmiView.vue';
import CreationServicesView from './views/CreationServicesView.vue';

const routes = [
  { path: '/', component: LoginAdmiView},
  { path: '/subcategories', component: SubcategoriesView },
  { path: '/bookings', component: BookingsView },
  
  {
    path: '/admin',
    component: AdminPageView,
    children: [
      { path: 'products', component: ProductsAdmiView },
      { path: 'services', component: ServicesAdmiView},
      { path: 'creation', component: CreationServicesView},
      { path: '/home', component: HomePageView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
