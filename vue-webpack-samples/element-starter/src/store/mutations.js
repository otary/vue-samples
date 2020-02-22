export default {
    changeUserInternal: function (state, _this) {
        state.userInfo = Object.assign(state.userInfo, {
            id: 5,
            name: '赵六'
        });
        _this.$message.success("更改为\"赵六\"");
    }
}