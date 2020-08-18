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

            <el-col :span="6">
                <el-card>
                    <div slot="header">
                        actions
                    </div>
                    <el-button @click="changeUserByActions">更改当前用户(this.$store.commit()方式)</el-button>
                    <el-button @click="changeUserByActions2">更改当前用户(mapAction方式)</el-button>
                </el-card>
            </el-col>

        </el-row>

        <el-row>
            <el-col :span="6">
                <el-card>
                    <div slot="header">
                        模块化
                    </div>
                    <el-button @click="getUserInfo2">获取用户(user模块的getUserInfo)</el-button>
                    <el-button @click="getShopInfo2">更改当前用户(mapAction方式)</el-button>
                </el-card>
            </el-col>
        </el-row>

    </section>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

    export default {
        name: "VuexSamples",
        computed: {
            ...mapState(['userInfo']),
            // 多模块，无法使用数组缩略形式
            ...mapState({
                userName: state => state.user.name,
                shopName: state => state.shop.name
            }),
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
            },

            /**
             * actions示例
             */
            ...mapActions(['changeUserPromise']),
            changeUserByActions: function () {
                // dispatch调用方式
                this.$store.dispatch('changeUserPromise', this);
            },
            changeUserByActions2: function () {
                // mapActions调用方式
                this.changeUserPromise(this);
            },

            /**
             * module示例
             * 提示: actions可使用缩略方式获取，需要注意各个模块方法名冲突
             * 提示2：state不可使用缩略方式获取，各模块间state字段名可重复
             */
            ...mapActions(['getUserInfo', 'getShopInfo']),
            getUserInfo2: function () {
                //this.getUserInfo();
                this.$store.dispatch('user/getUserInfo')

                this.$message.success("获取用户: " + this.userName);
            },
            getShopInfo2: function () {
                //this.getShopInfo();
                this.$store.dispatch('shop/getShopInfo')

                this.$message.success("获取到店名: " + this.shopName)
            }

        }
    }
</script>

<style scoped>


</style>