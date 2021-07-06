import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: () => import('../pages/Home')
    }, {
        path: '/polar',
        component: () => import('../pages/Polar')
    }, {
        path: '/animate-chart',
        component: ()=> import('../pages/AnimateChart')
    }, {
        path: '/line',
        component: ()=> import('../pages/Line')
    }]
})
