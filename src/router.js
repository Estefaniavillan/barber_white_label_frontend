import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue';
import LoginAdmi from './views/LoginAdmi.vue';
import ProductsAdmi from './views/ProductsAdmi.vue';


const routes = [
  { path: "/", component: HomeView },
  { path: "/LoginAdmi", component: LoginAdmi },
  {path: "/ProductsAdmi", component: ProductsAdmi}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;