import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/emit',
        name: 'Emit',
        component: ()=> import('@/components/EmitSamples')
    },{
        path: '/vuex',
        name: 'Vuex',
        component: ()=> import('@/components/VuexSamples')
    }]

})
