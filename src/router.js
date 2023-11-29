import {createRouter, createWebHistory} from 'vue-router'
import Subcategories from './views/SubcategoriesView.vue';
import Bookings from './components/home/BookingsHome.vue';
import AdminPage from './views/AdminPageView.vue';
import ProductsAdmi from './views/ProductsAdminView.vue';
import CreationServices from './views/CreationServicesView.vue';
import HomePageView from "./views/HomePageView.vue";
import ServicesAdminView from "./components/home/ServicesHome.vue";

const routes = [
    {path: '/', component: HomePageView},
    {path: '/subcategories', component: Subcategories},
    {path: '/bookings', component: Bookings},
    {
        path: '/admin',
        component: AdminPage,
        children: [
            {path: 'products', component: ProductsAdmi},
            {path: 'services', component: ServicesAdminView},
            {path: 'creation', component: CreationServices},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;