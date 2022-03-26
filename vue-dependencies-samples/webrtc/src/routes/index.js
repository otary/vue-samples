import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({

    routes: [{
        path: '/',
        name: 'Home',
        component: () => import('../pages/Local2Local')
    }, {
        path: '/client1',
        component: () => import('../pages/client1')
    }, {
        path: '/client2',
        component: () => import('../pages/client2')
    }]
})
