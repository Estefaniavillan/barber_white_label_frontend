import { createRouter, createWebHistory } from 'vue-router'

import LoginAdmin from './views/LoginAdminView.vue';
import Subcategories from './views/SubcategoriesView.vue';
import Bookings from './views/BookingsView.vue';
import AdminPage from './views/AdminPageView.vue';
import ServicesAdmi from './views/ServicesAdminView.vue';
import ProductsAdmi from './views/ProductsAdminView.vue';
import CreationServices from './views/CreationServicesView.vue';
import BlogView from './views/BlogView.vue'

const routes = [
  { path: '/', component: Bookings },
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