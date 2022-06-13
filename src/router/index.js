import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import IndexView from '../views/indexView.vue'
import ChatView from '../views/ChatView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/feed',
            name: 'home',
            component: IndexView,
            children: [{
                    path: '/feed',
                    name: 'home',
                    component: FeedView,
                },
                {
                    path: '/chat',
                    name: 'msg',
                    component: ChatView
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: Profile
                }
            ]
        },
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }


    ]
})

export default router