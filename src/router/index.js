import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Board from '../pages/Board.vue'
 const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/board',
            name: 'board',
            component: Board
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/board',
            name: 'board',
            component: Board
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/board',
            name: 'board',
            component: Board
        }
    ],
})

export default router