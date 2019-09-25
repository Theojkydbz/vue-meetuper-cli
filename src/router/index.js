import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import PageHome from '@/pages/PageHome'
import PageMeetupDetail from '@/pages/PageMeetupDetail'
import PageMeetupFind from '@/pages/PageMeetupFind'
import PageNotFound from '@/pages/PageNotFound'
import PageSecret from '@/pages/PageSecret'
import PageNotAuthenticated from '@/pages/PageNotAuthenticated'

import PageLogin from '@/pages/PageLogin'
import PageRegister from '@/pages/PageRegister'

Vue.use(Router)

const router = new Router ({
    routes: [
        {
            path: '/',
            name:  'PageHome',
            component: PageHome
        },
        {
            path: '/find',
            name:  'PageMeetupFind',
            component: PageMeetupFind
        },
        {
            path: '/meetups/secret',
            name:  'PageSecret',
            component: PageSecret,
            beforeEnter (to, from, next) {
                if(store.getter['auth/isAuthenticated']){
                    next()
                } else {
                    next({name: 'PageNotAuthenticated'})
                }

            }
        },
        {
            path: '/meetups/:id',
            name:  'PageMeetupDetail',
            component: PageMeetupDetail
        },
        {
            path: '/login',
            name:  'PageLogin',
            component: PageLogin
        },
        {
            path: '/register',
            name:  'PageRegister',
            component: PageRegister
        },
        {
            path: '/401',
            name: 'PageNotAuthenticated',
            component: PageNotAuthenticated
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ],
    mode: 'history'
})

export default router