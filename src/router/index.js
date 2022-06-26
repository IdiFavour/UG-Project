import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import IndexView from '../views/indexView.vue'
import ChatView from '../views/ChatView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import NewView from '../views/NewView.vue'
import SearchView from '../views/SearchView.vue'
import Settings from '../views/Settings.vue'
import Post from '../views/Post.vue'

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
        },
        {
            path: '/new',
            name: 'newview',
            component: NewView
        },
        {
            path: '/search',
            name: 'search',
            component: SearchView
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        },
        {
            path: '/post/:id',
            name: 'getpostdetails',
            component: Post
        }


    ]
})

export default router