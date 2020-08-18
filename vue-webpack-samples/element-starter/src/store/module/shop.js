
export default {

    state: {
        name: '',
        opened: false,
        score: 0
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        },
        setOpened(state, opened) {
            state.opened = opened;
        },
        setScore(state, score) {
            state.score = score;
        }
    },
    actions: {
        getShopInfo({commit}){
            return new Promise((resolve, reject) => {
                // axios请求
                const data = {
                    name: '小破店',
                    opened: true,
                    score: 92.3
                }
                commit('setName', data.name);
                commit('setOpened', data.opened);
                commit('setScore', data.score);
                resolve()
            });
        }
    }
}