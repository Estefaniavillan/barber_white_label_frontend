import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';

import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App).use(router).mount('#app')