import Vue from "vue";
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    userInfo: {
        id: 1,
        name: '张三'
    }
}


const getters = {
    getUserInternal: function (state) {
        return state.userInfo;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;