<template>
    <div>
        <div class="item2">
            <img src="https://img0.baidu.com/it/u=1596977024,2747475854&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=421" preview="2" preview-text="描述文字">
            <img src="https://img2.baidu.com/it/u=3496645542,2977113931&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500" preview="2" preview-text="描述文字2">
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import preview from 'vue-photo-preview';
    import 'vue-photo-preview/dist/skin.css';
    Vue.use(preview);

    export default {
        mounted() {

        }
    }
</script>

<style scoped>

</style>
