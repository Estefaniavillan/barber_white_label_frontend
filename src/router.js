import { createRouter, createWebHistory } from 'vue-router';



import EditProducts from './views/EditProducts.vue'

const routes = [
  { path: '/', component: EditProducts },
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
});

export default router;
