import {createRouter, createWebHistory} from 'vue-router'
import Subcategories from './views/SubcategoriesView.vue';
import Bookings from './components/home/BookingsHome.vue';
import AdminPage from './views/AdminPageView.vue';
import ProductsAdmi from './views/ProductsAdminView.vue';
import CreationServices from './views/CreationServicesView.vue';
import HomePageView from "./views/HomePageView.vue";
import ServicesAdminView from "./views/ServicesAdminView.vue";
import LoginAdminView from "./views/LoginAdminView.vue";

const routes = [
    {path: '/', component: HomePageView},
    {path: '/login', component: LoginAdminView},
    {path: '/subcategories', component: Subcategories},
    {path: '/bookings', component: Bookings},
    {path: '/admin/services', component: ServicesAdminView},
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