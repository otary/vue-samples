import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        component: () => import('../pages/MavonEditorPage')
    }, {
        path: '/markdown-it',
        component: () => import('../pages/MarkdownItPage')
    }, {
        path: '/markdown-it2',
        component: () => import('../pages/MarkdownIt2Page')
    }]
})
