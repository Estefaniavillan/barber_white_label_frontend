import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue';
import LoginAdmin from './views/LoginAdmin.vue';
import ProductsAdmin from './views/ProductsAdmin.vue';




const routes = [
  { path: "/", component: HomeView },
  { path: "/LoginAdmin", component: LoginAdmin },
  {path: "/ProductsAdmin", component: ProductsAdmin}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;