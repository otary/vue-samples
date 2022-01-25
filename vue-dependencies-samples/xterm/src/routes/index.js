import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({

    routes: [{
        path: '/',
        name: 'xterm',
        component: () => import('../pages/Term')
    },{
        path: '/player',
        component: () => import('../pages/RecordPlayer')
    }]
})
