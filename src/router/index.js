import Vue from 'vue'
import Router from 'view-router'

import Home from "../pages/Home";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*'
        },
        {
            path: '/',
            component: Home
        }
    ]
})