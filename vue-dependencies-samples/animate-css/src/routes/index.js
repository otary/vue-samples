import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home')
    }, {
        path: '/transition',
        component: ()=> import('../pages/TransitionPage')

    }]
})
