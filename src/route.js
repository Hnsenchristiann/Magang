import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import ComicView from './components/ComicView.vue'
import ComicDetails from './components/ComicDetails.vue'
import ArView from './components/ArView.vue'
import Regis from './components/Regis.vue'
import SignIn from './components/SignIn.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     meta: {
    //         default: true,
    //         title: 'Home',
    //     },
    //     component: Home
    // },
    {
        path: '/',
        name: 'Login',
        meta: {
            default: true,
            title: 'Login',
        },
        component: Login
    },
    {
        path: '/dashboard',
        name: 'AR Comics',
        meta: {
            default: true,
            title: 'AR Comics',
        },
        component: Dashboard
    },
    {
        path: '/view',
        name: 'Kara',
        meta: {
            default: true,
            title: 'Kara',
        },
        component: ComicView
    },
    {
        path: '/details',
        name: 'Book Detail',
        meta: {
            default: true,
            title: 'Book Detail',
        },
        component: ComicDetails
    },
    {
        path: '/ar/:scene',
        name: 'AR View',
        meta: {
            default: true,
            title: 'AR View',
        },
        component: ArView
    },
    {
        path: '/signin',
        name: 'Sign In',
        meta: {
            default: true,
            title: 'Sign In',
        },
        component: SignIn
    },
    {
        path: '/regis',
        name: 'Regis',
        meta: {
            default: true,
            title: 'Regis',
        },
        component: Regis
    },
]

const Route = createRouter({
    history: createWebHistory(),
    routes,
})

export default Route