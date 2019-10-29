<template>
    <section>

        <el-row>
            <el-col :span="6">
                <el-card>
                    <div slot="header">
                        state
                    </div>
                    <el-button @click="getCurrentUser">获取当前用户(this.$store.state方式)</el-button>
                    <el-button @click="getCurrentUserByMapState">获取当前用户(mapState方式)</el-button>
                    <el-button @click="changeUser">更改当前用户(this.$store.state方式)</el-button>
                    <el-button @click="changeUserByMapState">更改当前用户(mapSate方式)</el-button>
                </el-card>
            </el-col>

            <el-col :span="6">
                <el-card>
                    <div slot="header">
                        getters
                    </div>
                    <el-button @click="getUser">获取当前用户(this.$store.getters.getUser方式)</el-button>
                    <el-button @click="getCurrentUserByMapGetters">获取当前用户(mapGetters方式)</el-button>
                </el-card>
            </el-col>

            <el-col :span="6">
                <el-card>
                    <div slot="header">
                        mutations
                    </div>
                    <el-button @click="changeUserByMutations">更改当前用户(this.$store.commit()方式)</el-button>
                    <el-button @click="changeUserByMutations2">更改当前用户(mapMutations方式)</el-button>
                </el-card>
            </el-col>

        </el-row>

    </section>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        name: "VuexSamples",
        computed: {
            ...mapState(['userInfo'])
        },
        methods: {
            /**
             * state示例
             **/
            getCurrentUser: function () {
                // 使用原始获取方式
                this.$message.success(JSON.stringify(this.$store.state.userInfo));
            },
            getCurrentUserByMapState: function () {
                // 使用mapState映射简化
                this.$message.success(JSON.stringify(this.userInfo));
            },
            changeUser: function () {
                // 不推荐直接修改（不利于追踪）
                this.$store.state.userInfo = Object.assign(this.$store.state.userInfo, {
                    id: 2,
                    name: '李四'
                });
                this.$message.success("更改为\"李四\"");
            },
            changeUserByMapState: function () {
                // 不推荐直接修改（不利于追踪）
                this.userInfo = Object.assign(this.userInfo, {
                    id: 3,
                    name: '王五'
                });
                this.$message.success("更改为\"王五\"");
            },

            /**
             * getters示例
             **/
            ...mapGetters(['getUserInternal']),
            getUser: function () {
                // 使用原始获取方式
                this.$message.success(JSON.stringify(this.$store.getters.getUserInternal));
            },
            getCurrentUserByMapGetters: function () {
                // 使用mapGetters映射简化
                this.$message.success(JSON.stringify(this.getUser()));
            },

            /**
             * mutations示例
             */
            // ...mapMutations(['changeUserInternal']),
            ...mapMutations({changeUserInternal2: 'changeUserInternal'}),
            changeUserByMutations: function () {
                // 原始方式
                this.$store.commit('changeUserInternal', this);
            },
            changeUserByMutations2: function () {
                // 使用mapMutations方式
                this.changeUserInternal2(this);
            }
        }
    }
</script>

<style scoped>


</style>