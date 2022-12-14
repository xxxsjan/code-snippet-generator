import { createApp } from 'vue';
import App from './App.vue';

import './style.css';
import 'tailwindcss/tailwind.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import routes from './router/routes';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).use(ElementPlus).mount('#app');
