import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/HomePage.vue';
import Subcategories from './views/Subcategories.vue';
import Bookings from './views/Bookings.vue';
import AdminPage from './views/AdminPage.vue';
import ServicesAdminView from './views/ServicesAdminView.vue';
import ProductsAdmi from './views/ProductsAdmi.vue';
import CreationServices from './views/CreationServices.vue';

const routes = [
    {path: '/', component: ServicesAdminView},
    {path: '/subcategories', component: Subcategories},
    {path: '/bookings', component: Bookings},

    {
        path: '/admin',
        component: AdminPage,
        children: [
            {path: 'products', component: ProductsAdmi},
            {path: 'services', component: ServicesAdminView},
            {path: 'creation', component: CreationServices},
            {path: '/home', component: Home},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
