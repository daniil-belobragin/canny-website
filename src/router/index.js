import Vue from 'vue'
import Router from 'vue-router'

import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import CaseStudies from "../pages/CaseStudies";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            name: 'home',
            path: '/',
            component: Home,
            meta: {
                title: "Canny"
            }
        },
        {
            name: 'pricing',
            path:  '/pricing',
            component: Pricing,
            meta: {
                title: "Pricing | Canny"
            }
        },
        {
            name: 'case studies',
            path: '/case-studies',
            component: CaseStudies
        }
    ]
})