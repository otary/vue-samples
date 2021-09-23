<template>
    <div>
        <a-icon type="search" :style="{ fontSize: '20px', color: '#000' }"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    // 引入图标
    import {Icon} from 'ant-design-vue';
    Vue.component(Icon.name, Icon);

    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
