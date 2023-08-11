import { createRouter, createWebHistory } from 'vue-router';

import productRoutes from './products';
import LoginComponent from "../components/LoginComponent.vue";

const routes = [
    ...productRoutes,
    {
        path: '/login',
        component: LoginComponent,
        beforeEnter: (to, from, next) => {
            const accessToken = localStorage.getItem('access_token');
            if (accessToken) {
                next({ path: '/' });
            } else {
                next();
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
