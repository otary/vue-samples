export default {

    /**
     * 异步请求
     * @param commit
     * @param _this
     * @returns {Promise<any>}
     */
    changeUserPromise: function ({commit}, _this) {
        return new Promise((resolve, reject)=> {
            // axios异步请求

            // 调用mutations方法
            commit('changeUserInternal', _this);
            resolve()
        });

    }



}