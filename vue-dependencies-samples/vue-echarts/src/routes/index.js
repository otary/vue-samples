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
    }, {
        path: '/animate-histogram-chart',
        component: ()=> import('../pages/AnimateHistogramChartPage')
    }, {
        path: '/animate-time-line-chart',
        component: ()=> import('../pages/AnimateTimeLineChart')
    }, {
        path: '/radar',
        component: ()=> import('../pages/Radar')
    }]
})
