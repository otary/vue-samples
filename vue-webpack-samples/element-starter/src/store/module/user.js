
export default {
    namespaced: true,
    state:{
        name: '',
        age: '',
        sex: ''
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        },
        setAge(state, age) {
            state.age = age;
        },
        setSex(state, sex) {
            state.sex = sex;
        }
    },
    actions: {
        getUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                // axios请求
                const data = {
                    name: '张三',
                    age: 12,
                    sex: '男'
                };
                commit('setName', data.name);
                commit('setAge', data.age);
                commit('setSex', data.sex);
                resolve(data);
            });
        }
    }
}